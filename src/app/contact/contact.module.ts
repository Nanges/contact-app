import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '../shared/layout/layout.module';
import { MaterialModule } from '../shared/material/material.module';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactRoutingModule } from './contact-routing.module';

@NgModule({
    declarations: [ContactListComponent],
    imports: [CommonModule, ContactRoutingModule, LayoutModule, MaterialModule, ReactiveFormsModule],
})
export class ContactModule {}
