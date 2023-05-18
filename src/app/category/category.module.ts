import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EditionLayoutModule } from '../shared/layout/edition-layout/edition-layout.module';
import { ListingLayoutModule } from '../shared/layout/listing-layout/listing-layout.module';
import { MaterialModule } from '../shared/material/material.module';
import { AddCategoryComponent } from './add-category/add-category.component';
import { CategoryFieldsComponent } from './category-fields/category-fields.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryRoutingModule } from './category-routing.module';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { CategoryFormComponent } from './category-form/category-form.component';

@NgModule({
    declarations: [CategoryListComponent, AddCategoryComponent, EditCategoryComponent, CategoryFieldsComponent, CategoryFormComponent],
    imports: [CommonModule, CategoryRoutingModule, MaterialModule, ReactiveFormsModule, ListingLayoutModule, EditionLayoutModule],
})
export class CategoryModule {}
