import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
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

    saveHandler() {
        if (this.form.valid) {
            const handler: Observable<any> = this.creationMode
                ? this.categoryService.create(this.form.value['category'])
                : this.categoryService.update(this.index, this.form.value['category']);

            handler.subscribe(() => this.router.navigate(['../'], { relativeTo: this.route }));
        }
    }

    removeHandler() {
        if (confirm('Are you sure ?')) {
            this.categoryService.remove(this.index);
            this.router.navigate(['categories']);
        }
    }

    private buildForm() {
        return new FormGroup({
            category: new FormControl(null, Validators.required),
        });
    }
}
