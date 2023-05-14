import { Component, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/core/category.service';
import { ConfirmService } from 'src/app/shared/layout/confirm.service';
import { APP_FORM } from 'src/app/shared/layout/tokens/app-form';
import { categoryFormFactory } from '../category-form';

@Component({
    selector: 'app-add-category',
    template: `
        <app-edition-layout layoutTitle="Add category" (save)="saveHandler()" (cancel)="cancelHandler()">
            <app-category-fields></app-category-fields>
        </app-edition-layout>
    `,
    providers: [
        {
            provide: APP_FORM,
            useFactory: categoryFormFactory,
        },
    ],
})
export class AddCategoryComponent {
    /**
     *
     */
    constructor(
        @Inject(APP_FORM) private form: FormGroup,
        private categoryService: CategoryService,
        private route: ActivatedRoute,
        private router: Router,
        private confirmService: ConfirmService
    ) {}

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
