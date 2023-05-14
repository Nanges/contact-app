import { Component, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { CategoryService } from 'src/app/core/category.service';
import { ConfirmService } from 'src/app/shared/layout/confirm.service';
import { appForm, APP_FORM } from 'src/app/shared/layout/tokens/app-form';
import { categoryFormFactory } from '../category-form';

@Component({
    selector: 'app-edit-category',
    template: `
        <app-edition-layout layoutTitle="Edit category" (save)="saveHandler()" (cancel)="cancelHandler()">
            <app-remove-button tooltip="Remove this category" (click)="removeHandler()"></app-remove-button>
            <app-category-fields></app-category-fields>
        </app-edition-layout>
    `,
    providers: [appForm(categoryFormFactory)],
})
export class EditCategoryComponent {
    readonly index: number;
    readonly category!: string;
    /**
     *
     */
    constructor(
        @Inject(APP_FORM) private form: FormGroup,
        private categoryService: CategoryService,
        private route: ActivatedRoute,
        private router: Router,
        private confirmService: ConfirmService
    ) {
        this.index = Number(this.route.snapshot.paramMap.get('categoryId'));
        this.category = this.route.snapshot.data['category'];
        this.form.setValue({
            category: this.category,
        });
    }

    saveHandler() {
        if (!this.form.valid) return;
        this.categoryService
            .update(this.index, this.form.value['category'])
            .subscribe(() => this.router.navigate(['..'], { relativeTo: this.route }));
    }

    removeHandler() {
        this.confirmService
            .confirm(`Remove category "${this.category}"`, `You are going to remove category "${this.category}". Do you wish to continue ?`)
            .pipe(switchMap(() => this.categoryService.remove(this.index)))
            .subscribe(() => this.router.navigate(['..'], { relativeTo: this.route }));
    }

    cancelHandler() {
        if (this.form.pristine) {
            this.router.navigate(['..'], { relativeTo: this.route });
            return;
        }

        this.confirmService
            .confirm(`You are leaving`, `You are going to leave with unsaved work. Do you wish to continue ?`)
            .subscribe(() => this.router.navigate(['..'], { relativeTo: this.route }));
    }
}
