import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '../shared/layout/layout.module';
import { MaterialModule } from '../shared/material/material.module';
import { AddCategoryComponent } from './add-category/add-category.component';
import { CategoryFieldsComponent } from './category-fields/category-fields.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryRoutingModule } from './category-routing.module';
import { EditCategoryComponent } from './edit-category/edit-category.component';

@NgModule({
    declarations: [CategoryListComponent, AddCategoryComponent, EditCategoryComponent, CategoryFieldsComponent],
    imports: [CommonModule, CategoryRoutingModule, LayoutModule, MaterialModule, ReactiveFormsModule],
})
export class CategoryModule {}
