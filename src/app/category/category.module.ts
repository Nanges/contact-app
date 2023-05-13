import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ListingLayoutModule } from '../shared/layout/listing-layout/listing-layout.module';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryRoutingModule } from './category-routing.module';

@NgModule({
    declarations: [CategoryListComponent],
    imports: [CommonModule, CategoryRoutingModule, ListingLayoutModule],
})
export class CategoryModule {}
