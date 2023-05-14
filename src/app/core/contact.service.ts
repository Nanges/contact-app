import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';
import { Contact } from './models/contact';

@Injectable({
    providedIn: 'root',
})
export class ContactService {
    private _data: Contact[] = [
        {
            firstname: 'John',
            lastname: 'Doe',
            email: 'john.doe@mailinator.com',
            phone: '0479666768',
            category: 'professional',
        },
        {
            firstname: 'Bob',
            lastname: 'Marley',
            email: 'cool@mailinator.com',
            phone: '0479767778',
            category: 'professional',
        },
        {
            firstname: 'Jean',
            lastname: 'Dupont',
            email: 'jean.dupont@mailinator.com',
            phone: '0479123456',
            category: 'private',
        },
    ];

    constructor() {}

    /**
     *
     * @returns
     */
    getContacts() {
        return of(this._data);
    }

    /**
     *
     * @param index
     * @returns
     */
    getContact(index: number) {
        return index >= this._data.length || index < 0 ? throwError(() => new Error('Contact not found')) : of(this._data[index]);
    }

    /**
     * @param contact
     * @returns last inserted index
     */
    create(contact: Contact) {
        return of(this._data.push(contact) - 1);
    }

    update(index: number, contact: Contact) {
        this._data[index] = contact;
        return of(null);
    }

    remove(index: number) {
        this._data.splice(index, 1);
        return of(null);
    }
}
