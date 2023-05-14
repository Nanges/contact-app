import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { CategoryService } from 'src/app/core/category.service';
import { ContactService } from 'src/app/core/contact.service';
import { Contact } from 'src/app/core/models/contact';
import { ConfirmService } from 'src/app/shared/layout/confirm/confirm.service';

@Component({
    selector: 'app-contact-form',
    templateUrl: './contact-form.component.html',
})
export class ContactFormComponent {
    readonly index: number;
    readonly creationMode: boolean;
    readonly form: FormGroup;
    readonly contact!: Contact;
    readonly categories$!: Observable<string[]>;

    constructor(
        private route: ActivatedRoute,
        private contactService: ContactService,
        private categoryService: CategoryService,
        private router: Router,
        private confirmService: ConfirmService
    ) {
        this.categories$ = this.categoryService.getCategories();
        this.form = this.buildForm();
        this.index = Number(this.route.snapshot.paramMap.get('contactId'));
        this.contact = this.route.snapshot.data['contact'];

        if (this.contact === undefined) {
            // creation mode
            this.creationMode = true;
        } else {
            // edition mode
            this.creationMode = false;
            this.form.setValue(this.contact);
        }
    }

    saveHandler() {
        if (this.form.valid) {
            const handler: Observable<any> = this.creationMode
                ? this.contactService.create(this.form.value)
                : this.contactService.update(this.index, this.form.value);

            handler.subscribe(() => this.router.navigate(['..'], { relativeTo: this.route }));
        }
    }

    cancelHandler() {
        if (this.form.pristine) {
            this.router.navigate(['..'], { relativeTo: this.route });
            return;
        }

        this.confirmService
            .confirm(`You are leaving`, `You are going to leave with unsaved work. Do you wish to continue ?`)
            .subscribe(() => this.router.navigate(['..'], { relativeTo: this.route }));
    }

    removeHandler() {
        this.confirmService
            .confirm(
                `Remove contact "${this.contact.firstname} ${this.contact.lastname}"`,
                `You are going to remove contact "${this.contact.firstname} ${this.contact.lastname}". Do you wish to continue ?`
            )
            .pipe(switchMap(() => this.contactService.remove(this.index)))
            .subscribe(() => this.router.navigate(['..'], { relativeTo: this.route }));
    }

    private buildForm() {
        return new FormGroup({
            firstname: new FormControl(null, Validators.required),
            lastname: new FormControl(null, Validators.required),
            email: new FormControl(null, [Validators.required, Validators.email]),
            phone: new FormControl(null, [Validators.required]),
            category: new FormControl(null, Validators.required),
        });
    }
}
