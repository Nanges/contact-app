import { Component, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { defer } from 'rxjs';
import { CategoryService } from 'src/app/core/category.service';
import { appForm, APP_FORM } from 'src/app/shared/layout/edition-layout/tokens/app-form';
import { categoryFormFactory } from '../category-form';

@Component({
    selector: 'app-edit-category',
    template: `
        <app-edition-layout layoutTitle="Edit category" appUseCancellation [appSaveHandler]="saveHandler$">
            <app-remove-button
                tooltip="Remove this category"
                [appRemoveHandler]="removeHandler$"
                [confirmTitle]="confirmTitle"
                [confirmContent]="confirmContent"
            ></app-remove-button>
            <app-category-fields></app-category-fields>
        </app-edition-layout>
    `,
    providers: [appForm(categoryFormFactory)],
})
export class EditCategoryComponent {
    readonly index: number;
    readonly category: string;
    readonly saveHandler$ = defer(() => this.categoryService.update(this.index, this.form.value['category']));
    readonly removeHandler$ = defer(() => this.categoryService.remove(this.index));

    get confirmTitle() {
        return `Remove category "${this.category}"`;
    }

    get confirmContent() {
        return `You are going to remove category "${this.category}". Do you wish to continue ?`;
    }
    /**
     *
     */
    constructor(@Inject(APP_FORM) private form: FormGroup, private categoryService: CategoryService, private route: ActivatedRoute) {
        this.index = Number(this.route.snapshot.paramMap.get('categoryId'));
        this.category = this.route.snapshot.data['category'];
        this.form.setValue({
            category: this.category,
        });
    }
}
