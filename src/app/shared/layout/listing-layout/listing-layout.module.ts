import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { BaseLayoutModule } from '../base-layout/base-layout.module';
import { AddButtonComponent } from './add-button/add-button.component';
import { ListingLayoutComponent } from './listing-layout/listing-layout.component';

@NgModule({
    declarations: [AddButtonComponent, ListingLayoutComponent],
    imports: [CommonModule, BaseLayoutModule, MaterialModule],
    exports: [AddButtonComponent, ListingLayoutComponent],
})
export class ListingLayoutModule {}
