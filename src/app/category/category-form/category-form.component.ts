import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, Observable, switchMap } from 'rxjs';
import { ConfirmModalComponent } from 'src/app/shared/layout/confirm-modal/confirm-modal.component';
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
        private dialog: MatDialog
    ) {
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

    cancelHandler() {
        if (this.form.pristine) {
            this.router.navigate(['categories']);
            return;
        }

        const dialogRef = this.dialog.open(ConfirmModalComponent, {
            data: {
                title: `You are leaving`,
                content: `You are going to leave with unsaved work. Do you wish to continue ?`,
            },
        });

        dialogRef
            .afterClosed()
            .pipe(filter((confirmation: boolean) => confirmation))
            .subscribe(() => this.router.navigate(['categories']));
    }

    removeHandler() {
        const dialogRef = this.dialog.open(ConfirmModalComponent, {
            data: {
                title: `Remove category "${this.category}"`,
                content: `You are going to remove category "${this.category}". Do you wish to continue ?`,
            },
        });

        dialogRef
            .afterClosed()
            .pipe(
                filter((confirmation: boolean) => confirmation),
                switchMap(() => this.categoryService.remove(this.index))
            )
            .subscribe(() => this.router.navigate(['categories']));
    }

    private buildForm() {
        return new FormGroup({
            category: new FormControl(null, Validators.required),
        });
    }
}
