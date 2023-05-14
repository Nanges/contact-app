import { Component, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { CategoryService } from 'src/app/core/category.service';
import { APP_FORM } from 'src/app/shared/layout/edition-layout/tokens/app-form';

@Component({
    selector: 'app-contact-fields',
    templateUrl: './contact-fields.component.html',
    styleUrls: ['./contact-fields.component.scss'],
})
export class ContactFieldsComponent {
    readonly categories$: Observable<string[]> = this.categoryService.getCategories();

    constructor(@Inject(APP_FORM) readonly form: FormGroup, private categoryService: CategoryService) {}
}
