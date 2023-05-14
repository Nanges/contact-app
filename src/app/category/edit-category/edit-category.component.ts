import { Component } from '@angular/core';
import { CategoryForm } from '../category-form';

@Component({
    selector: 'app-edit-category',
    templateUrl: './edit-category.component.html',
})
export class EditCategoryComponent extends CategoryForm {}
