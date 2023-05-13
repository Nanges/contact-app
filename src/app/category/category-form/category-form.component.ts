import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../../core/category.service';

@Component({
    selector: 'app-category-form',
    templateUrl: './category-form.component.html',
    styleUrls: ['./category-form.component.scss'],
})
export class CategoryFormComponent {
    readonly index: number;
    readonly creationMode: boolean;
    readonly form: FormGroup;
    readonly category!: string;

    constructor(private route: ActivatedRoute, private categoryService: CategoryService, private router: Router) {
        this.form = this.buildForm();
        this.index = Number(route.snapshot.paramMap.get('id'));
        this.category = route.snapshot.data['category'];

        if (this.category === undefined) {
            // creation mode
            this.creationMode = true;
        } else {
            // edition mode
            this.creationMode = false;
            this.form.setValue({
                category: this.category,
            });
        }
    }

    private buildForm() {
        return new FormGroup({
            category: new FormControl(null, Validators.required),
        });
    }
}
