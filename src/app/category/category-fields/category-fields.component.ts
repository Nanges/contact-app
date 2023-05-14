import { Component } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
import { FieldsComponent } from 'src/app/shared/layout/fields-component';

@Component({
    selector: 'app-category-fields',
    templateUrl: './category-fields.component.html',
    styleUrls: ['./category-fields.component.scss'],
})
export class CategoryFieldsComponent implements FieldsComponent {
    get form() {
        return this.fg.form;
    }
    /**
     *
     */
    constructor(private fg: FormGroupDirective) {}
}
