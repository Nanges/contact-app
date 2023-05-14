import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/core/category.service';
import { ConfirmService } from 'src/app/shared/layout/confirm.service';
import { CategoryForm } from '../category-form';

@Component({
    selector: 'app-add-category',
    template: `
        <app-edition-layout layoutTitle="Add category" [formGroup]="form" (save)="saveHandler()" (cancel)="cancelHandler()">
            <app-category-fields></app-category-fields>
        </app-edition-layout>
    `,
})
export class AddCategoryComponent extends CategoryForm {
    /**
     *
     */
    constructor(
        private categoryService: CategoryService,
        private route: ActivatedRoute,
        private router: Router,
        private confirmService: ConfirmService
    ) {
        super();
    }

    saveHandler() {
        if (!this.form.valid) return;
        this.categoryService.create(this.form.value['category']).subscribe(() => this.router.navigate(['..'], { relativeTo: this.route }));
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
