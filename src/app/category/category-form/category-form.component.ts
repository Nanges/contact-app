import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { ConfirmService } from 'src/app/shared/layout/confirm.service';
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

    constructor(
        private route: ActivatedRoute,
        private categoryService: CategoryService,
        private router: Router,
        private confirmService: ConfirmService
    ) {
        this.form = this.buildForm();
        this.index = Number(this.route.snapshot.paramMap.get('id'));
        this.category = this.route.snapshot.data['category'];

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

            handler.subscribe(() => this.router.navigate(['categories']));
        }
    }

    cancelHandler() {
        if (this.form.pristine) {
            this.router.navigate(['categories']);
            return;
        }

        this.confirmService
            .confirm(`You are leaving`, `You are going to leave with unsaved work. Do you wish to continue ?`)
            .subscribe(() => this.router.navigate(['categories']));
    }

    removeHandler() {
        this.confirmService
            .confirm(`Remove category "${this.category}"`, `You are going to remove category "${this.category}". Do you wish to continue ?`)
            .pipe(switchMap(() => this.categoryService.remove(this.index)))
            .subscribe(() => this.router.navigate(['categories']));
    }

    private buildForm() {
        return new FormGroup({
            category: new FormControl(null, Validators.required),
        });
    }
}
