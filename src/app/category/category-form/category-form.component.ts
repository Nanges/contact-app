import { Component, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { defer, Observable } from 'rxjs';
import { CategoryService } from 'src/app/core/category.service';
import { FormMode } from 'src/app/shared/form-mode/form-mode';
import { FormModeVisitor } from 'src/app/shared/form-mode/from-mode-visitor';
import { APP_FORM } from 'src/app/shared/layout/edition-layout/tokens/app-form';

@Component({
    selector: 'app-category-form',
    templateUrl: './category-form.component.html',
    styleUrls: ['./category-form.component.scss'],
})
export class CategoryFormComponent implements FormModeVisitor {
    private _layoutTitle!: string;
    get layoutTitle() {
        return this._layoutTitle;
    }

    private _saveHandler$!: Observable<any>;
    get saveHandler$() {
        return this._saveHandler$;
    }

    private _removeHandler$?: Observable<any>;
    get removeHandler$() {
        return this._removeHandler$;
    }

    private _confirmTitle: string = '';
    get confirmTitle() {
        return this._confirmTitle;
    }

    private _confirmContent: string = '';
    get confirmContent() {
        return this._confirmContent;
    }

    /**
     *
     */
    constructor(
        @Inject(APP_FORM) readonly form: FormGroup,
        mode: FormMode,
        private route: ActivatedRoute,
        private categoryService: CategoryService
    ) {
        mode.accept(this);
    }

    /**
     *
     */
    createMode(): void {
        this._saveHandler$ = defer(() => this.categoryService.create(this.form.value));
        this._layoutTitle = 'Add category';
    }

    /**
     *
     */
    updateMode(): void {
        const index = Number(this.route.snapshot.paramMap.get('categoryId'));
        const category: string = this.route.snapshot.data['category'];

        this.form.setValue({ category });
        this._saveHandler$ = defer(() => this.categoryService.update(index, this.form.value['category']));
        this._removeHandler$ = defer(() => this.categoryService.remove(index));
        this._layoutTitle = 'Edit category';
        this._confirmTitle = `Remove category "${category}"`;
        this._confirmContent = `You are going to remove contact "${category}". Do you wish to continue ?`;
    }
}
