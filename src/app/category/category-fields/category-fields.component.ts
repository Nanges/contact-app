import { Component, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { APP_FORM } from 'src/app/shared/layout/tokens/app-form';

@Component({
    selector: 'app-category-fields',
    templateUrl: './category-fields.component.html',
    styleUrls: ['./category-fields.component.scss'],
})
export class CategoryFieldsComponent {
    /**
     *
     */
    constructor(@Inject(APP_FORM) readonly form: FormGroup) {}
}
