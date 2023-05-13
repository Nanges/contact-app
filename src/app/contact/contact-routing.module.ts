import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactResolver } from '../core/resolvers/contact.resolver';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactListComponent } from './contact-list/contact-list.component';

const routes: Routes = [
    {
        path: '',
        component: ContactListComponent,
    },
    {
        path: 'add',
        component: ContactFormComponent,
    },
    {
        path: 'edit/:contactId',
        resolve: {
            contact: ContactResolver,
        },
        component: ContactFormComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ContactRoutingModule {}
