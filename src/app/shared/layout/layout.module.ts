import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { AddButtonComponent } from './add-button/add-button.component';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { EditionLayoutComponent } from './edition-layout/edition-layout.component';
import { ListingLayoutComponent } from './listing-layout/listing-layout.component';
import { RemoveButtonComponent } from './remove-button/remove-button.component';

@NgModule({
    declarations: [RemoveButtonComponent, AddButtonComponent, ListingLayoutComponent, EditionLayoutComponent, ConfirmModalComponent],
    imports: [CommonModule, MaterialModule],
    exports: [RemoveButtonComponent, AddButtonComponent, ListingLayoutComponent, EditionLayoutComponent, ConfirmModalComponent],
})
export class LayoutModule {}
