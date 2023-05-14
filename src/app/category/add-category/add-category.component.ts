import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/core/category.service';
import { CategoryForm } from '../category-form';

@Component({
    selector: 'app-add-category',
    template: `
        <app-edition-layout layoutTitle="Add category" [formGroup]="form" (save)="saveHandler()">
            <app-category-fields></app-category-fields>
        </app-edition-layout>
    `,
})
export class AddCategoryComponent extends CategoryForm {
    /**
     *
     */
    constructor(private categoryService: CategoryService, private route: ActivatedRoute, private router: Router) {
        super();
    }

    saveHandler() {
        if (!this.form.valid) return;
        this.categoryService.create(this.form.value['category']).subscribe(() => this.router.navigate(['..'], { relativeTo: this.route }));
    }
}
