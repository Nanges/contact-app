import { Component, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { defer, Observable } from 'rxjs';
import { CategoryService } from 'src/app/core/category.service';
import { ContactService } from 'src/app/core/contact.service';
import { Contact } from 'src/app/core/models/contact';
import { FormMode } from 'src/app/shared/form-mode/form-mode';
import { FormModeVisitor } from 'src/app/shared/form-mode/from-mode-visitor';
import { appForm, APP_FORM } from 'src/app/shared/layout/edition-layout/tokens/app-form';
import { contactFormFactory } from '../contact-form';

@Component({
    selector: 'app-contact-form',
    templateUrl: './contact-form.component.html',
    providers: [appForm(contactFormFactory)],
})
export class ContactFormComponent implements FormModeVisitor {
    readonly categories$: Observable<string[]> = this.categoryService.getCategories();

    private _layoutTitle!: string;
    get layoutTitle() {
        return this._layoutTitle;
    }

    private _saveHandler$!: Observable<any>;
    get saveHandler$() {
        return this._saveHandler$;
    }

    private _removeHandler$?: Observable<any>;
    get removeHandler$() {
        return this._removeHandler$;
    }

    private _confirmTitle: string = '';
    get confirmTitle() {
        return this._confirmTitle;
    }

    private _confirmContent: string = '';
    get confirmContent() {
        return this._confirmContent;
    }

    /**
     *
     */
    constructor(
        @Inject(APP_FORM) readonly form: FormGroup,
        mode: FormMode,
        private contactService: ContactService,
        private route: ActivatedRoute,
        private categoryService: CategoryService
    ) {
        mode.accept(this);
    }

    /**
     *
     */
    createMode(): void {
        this._saveHandler$ = defer(() => this.contactService.create(this.form.value));
        this._layoutTitle = 'Add contact';
    }

    /**
     *
     */
    updateMode(): void {
        const index = Number(this.route.snapshot.paramMap.get('contactId'));
        const contact: Contact = this.route.snapshot.data['contact'];

        this.form.setValue(contact);
        this._saveHandler$ = defer(() => this.contactService.update(index, this.form.value));
        this._removeHandler$ = defer(() => this.contactService.remove(index));
        this._layoutTitle = 'Edit contact';
        this._confirmTitle = `Remove contact "${contact.lastname} ${contact.firstname}"`;
        this._confirmContent = `You are going to remove contact "${contact.lastname} ${contact.firstname}". Do you wish to continue ?`;
    }
}
