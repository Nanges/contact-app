import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { AddButtonComponent } from './add-button/add-button.component';
import { ListingLayoutComponent } from './listing-layout/listing-layout.component';

@NgModule({
    declarations: [ListingLayoutComponent, AddButtonComponent],
    imports: [CommonModule, MaterialModule],
    exports: [ListingLayoutComponent, AddButtonComponent],
})
export class ListingLayoutModule {}
