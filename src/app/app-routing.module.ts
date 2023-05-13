import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'categories',
        loadChildren: () => import('./category/category.module').then((m) => m.CategoryModule),
    },
    {
        path: 'contacts',
        loadChildren: () => import('./contact/contact.module').then((m) => m.ContactModule),
    },
    {
        path: '**',
        redirectTo: 'contacts',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
