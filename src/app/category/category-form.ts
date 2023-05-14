import { Directive } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Directive()
export abstract class CategoryForm {
    readonly form: FormGroup;

    constructor() {
        this.form = this.buildForm();
    }

    private buildForm() {
        return new FormGroup({
            category: new FormControl(null, Validators.required),
        });
    }
}
