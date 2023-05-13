import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ListingLayoutComponent } from './listing-layout/listing-layout.component';

@NgModule({
    declarations: [ListingLayoutComponent],
    imports: [CommonModule],
    exports: [ListingLayoutComponent],
})
export class ListingLayoutModule {}
