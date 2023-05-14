import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { APP_FORM } from '../tokens/app-form';

@Component({
    selector: 'app-edition-layout',
    templateUrl: './edition-layout.component.html',
})
export class EditionLayoutComponent {
    @Input() layoutTitle!: string;
    @Output() cancel = new EventEmitter();
    @Output() save = new EventEmitter();

    /**
     *
     */
    constructor(@Inject(APP_FORM) readonly form: FormGroup) {}
}
