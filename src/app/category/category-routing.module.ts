import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryResolver } from '../core/resolvers/category.resolver';
import { AddCategoryComponent } from './add-category/add-category.component';
import { CategoryFormComponent } from './category-form/category-form.component';
import { CategoryListComponent } from './category-list/category-list.component';

const routes: Routes = [
    {
        path: '',
        component: CategoryListComponent,
    },
    {
        path: 'add',
        component: AddCategoryComponent,
    },
    {
        path: ':categoryId',
        resolve: {
            category: CategoryResolver,
        },
        component: CategoryFormComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CategoryRoutingModule {}
