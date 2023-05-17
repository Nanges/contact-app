import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactResolver } from '../core/resolvers/contact.resolver';
import { ADD_BEHAVIOR } from '../shared/crud/add-behavior.service';
import { UPDATE_BEHAVIOR } from '../shared/crud/update-behavior.service';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';

const routes: Routes = [
    {
        path: '',
        component: ContactListComponent,
    },
    {
        path: 'add',
        providers: [ADD_BEHAVIOR],
        component: AddContactComponent,
    },
    {
        path: ':contactId',
        resolve: {
            contact: ContactResolver,
        },
        providers: [UPDATE_BEHAVIOR],
        component: EditContactComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ContactRoutingModule {}
