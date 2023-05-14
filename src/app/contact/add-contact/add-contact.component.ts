import { Component, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { defer } from 'rxjs';
import { ContactService } from 'src/app/core/contact.service';
import { appForm, APP_FORM } from 'src/app/shared/layout/edition-layout/tokens/app-form';
import { contactFormFactory } from '../contact-form';

@Component({
    selector: 'app-add-contact',
    template: `
        <app-edition-layout layoutTitle="Add contact" appUseCancellation [appSaveHandler]="saveHandler$">
            <app-contact-fields></app-contact-fields>
        </app-edition-layout>
    `,
    providers: [appForm(contactFormFactory)],
})
export class AddContactComponent {
    readonly saveHandler$ = defer(() => this.contactService.create(this.form.value));

    constructor(@Inject(APP_FORM) readonly form: FormGroup, private contactService: ContactService) {}
}
