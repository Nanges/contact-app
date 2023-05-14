import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EditionLayoutModule } from '../shared/layout/edition-layout/edition-layout.module';
import { ListingLayoutModule } from '../shared/layout/listing-layout/listing-layout.module';
import { MaterialModule } from '../shared/material/material.module';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactRoutingModule } from './contact-routing.module';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ContactFieldsComponent } from './contact-fields/contact-fields.component';

@NgModule({
    declarations: [ContactListComponent, ContactFormComponent, AddContactComponent, ContactFieldsComponent],
    imports: [CommonModule, ContactRoutingModule, MaterialModule, ReactiveFormsModule, ListingLayoutModule, EditionLayoutModule],
})
export class ContactModule {}
