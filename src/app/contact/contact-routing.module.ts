import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactResolver } from '../core/resolvers/contact.resolver';
import { CREATE_MODE } from '../shared/form-mode/create-mode.service';
import { UPDATE_MODE } from '../shared/form-mode/update-mode.service';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactListComponent } from './contact-list/contact-list.component';

const routes: Routes = [
    {
        path: '',
        component: ContactListComponent,
    },
    {
        path: 'add',
        providers: [CREATE_MODE],
        component: ContactFormComponent,
    },
    {
        path: ':contactId',
        resolve: {
            contact: ContactResolver,
        },
        providers: [UPDATE_MODE],
        component: ContactFormComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ContactRoutingModule {}
