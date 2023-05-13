import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ContactService } from 'src/app/core/contact.service';
import { Contact } from 'src/app/core/models/contact';

@Component({
    selector: 'app-contact-list',
    templateUrl: './contact-list.component.html',
    styleUrls: ['./contact-list.component.scss'],
})
export class ContactListComponent {
    readonly contacts$: Observable<Contact[]>;
    readonly displayedColumns: string[] = ['name', 'email', 'phone', 'category', 'action'];
    /**
     *
     */
    constructor(private router: Router, private route: ActivatedRoute, private contactService: ContactService) {
        this.contacts$ = this.contactService.getContacts();
    }

    addContact() {
        this.router.navigate(['add'], { relativeTo: this.route });
    }
}
