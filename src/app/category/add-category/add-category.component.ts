import { Component } from '@angular/core';
import { CategoryForm } from '../category-form';

@Component({
    selector: 'app-add-category',
    templateUrl: './add-category.component.html',
})
export class AddCategoryComponent extends CategoryForm {}
