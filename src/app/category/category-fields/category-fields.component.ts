import { Component } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';

@Component({
    selector: 'app-category-fields',
    templateUrl: './category-fields.component.html',
    styleUrls: ['./category-fields.component.scss'],
})
export class CategoryFieldsComponent {
    get form() {
        return this.fg.form;
    }
    /**
     *
     */
    constructor(private fg: FormGroupDirective) {}
}
