import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { AddButtonComponent } from './add-button/add-button.component';
import { ListingLayoutComponent } from './listing-layout/listing-layout.component';
import { RemoveButtonComponent } from './remove-button/remove-button.component';
import { EditionLayoutComponent } from './edition-layout/edition-layout.component';

@NgModule({
    declarations: [RemoveButtonComponent, AddButtonComponent, ListingLayoutComponent, EditionLayoutComponent],
    imports: [CommonModule, MaterialModule],
    exports: [RemoveButtonComponent, AddButtonComponent, ListingLayoutComponent, EditionLayoutComponent],
})
export class LayoutModule {}
