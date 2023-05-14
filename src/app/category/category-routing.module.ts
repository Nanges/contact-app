import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryResolver } from '../core/resolvers/category.resolver';
import { AddCategoryComponent } from './add-category/add-category.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';

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
        component: EditCategoryComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CategoryRoutingModule {}
