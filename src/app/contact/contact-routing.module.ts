import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactResolver } from '../core/resolvers/contact.resolver';
import { ADD_BEHAVIOR } from '../shared/crud/add-behavior.service';
import { UPDATE_BEHAVIOR } from '../shared/crud/update-behavior.service';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactListComponent } from './contact-list/contact-list.component';

const routes: Routes = [
    {
        path: '',
        component: ContactListComponent,
    },
    {
        path: 'add',
        providers: [ADD_BEHAVIOR],
        component: ContactFormComponent,
    },
    {
        path: ':contactId',
        resolve: {
            contact: ContactResolver,
        },
        providers: [UPDATE_BEHAVIOR],
        component: ContactFormComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ContactRoutingModule {}
