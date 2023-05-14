import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ContactService } from '../contact.service';
import { Contact } from '../models/contact';

@Injectable({
    providedIn: 'root',
})
export class ContactResolver implements Resolve<Contact> {
    constructor(private contactService: ContactService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Contact> {
        const id = route.params['contactId'];
        if (id === undefined) throw new Error('ContactId not provided');

        return this.contactService.getContact(+id);
    }
}
