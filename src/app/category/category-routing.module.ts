import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryResolver } from '../core/resolvers/category.resolver';
import { CREATE_MODE } from '../shared/form-mode/create-mode.service';
import { UPDATE_MODE } from '../shared/form-mode/update-mode.service';
import { CategoryFormComponent } from './category-form/category-form.component';
import { CategoryListComponent } from './category-list/category-list.component';

const routes: Routes = [
    {
        path: '',
        component: CategoryListComponent,
    },
    {
        path: 'add',
        providers: [CREATE_MODE],
        component: CategoryFormComponent,
    },
    {
        path: ':categoryId',
        resolve: {
            category: CategoryResolver,
        },
        providers: [UPDATE_MODE],
        component: CategoryFormComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CategoryRoutingModule {}
