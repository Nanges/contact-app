import { Component, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { defer } from 'rxjs';
import { ContactService } from 'src/app/core/contact.service';
import { Contact } from 'src/app/core/models/contact';
import { appForm, APP_FORM } from 'src/app/shared/layout/edition-layout/tokens/app-form';
import { contactFormFactory } from '../contact-form';

@Component({
    selector: 'app-edit-contact',
    template: `
        <app-edition-layout layoutTitle="Edit contact" appUseCancellation [appSaveHandler]="saveHandler$">
            <app-remove-button
                tooltip="Remove this contact"
                [appRemoveHandler]="removeHandler$"
                [confirmTitle]="confirmTitle"
                [confirmContent]="confirmContent"
            ></app-remove-button>
            <app-contact-fields></app-contact-fields>
        </app-edition-layout>
    `,
    providers: [appForm(contactFormFactory)],
})
export class EditContactComponent {
    readonly index: number;
    readonly contact!: Contact;

    readonly saveHandler$ = defer(() => this.contactService.update(this.index, this.form.value));
    readonly removeHandler$ = defer(() => this.contactService.remove(this.index));

    get confirmTitle() {
        return `Remove contact "${this.contact.lastname} ${this.contact.firstname}"`;
    }

    get confirmContent() {
        return `You are going to remove contact "${this.contact.lastname} ${this.contact.firstname}". Do you wish to continue ?`;
    }

    constructor(@Inject(APP_FORM) private form: FormGroup, private route: ActivatedRoute, private contactService: ContactService) {
        this.index = Number(this.route.snapshot.paramMap.get('contactId'));
        this.contact = this.route.snapshot.data['contact'];
        this.form.setValue(this.contact);
    }
}
