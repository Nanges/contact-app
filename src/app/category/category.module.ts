import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '../shared/layout/layout.module';
import { MaterialModule } from '../shared/material/material.module';
import { CategoryFormComponent } from './category-form/category-form.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryRoutingModule } from './category-routing.module';
@NgModule({
    declarations: [CategoryListComponent, CategoryFormComponent],
    imports: [CommonModule, CategoryRoutingModule, LayoutModule, MaterialModule, ReactiveFormsModule],
})
export class CategoryModule {}
