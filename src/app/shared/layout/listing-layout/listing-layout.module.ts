import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { ListingLayoutComponent } from './listing-layout/listing-layout.component';

@NgModule({
    declarations: [ListingLayoutComponent],
    imports: [CommonModule, MaterialModule],
    exports: [ListingLayoutComponent],
})
export class ListingLayoutModule {}
