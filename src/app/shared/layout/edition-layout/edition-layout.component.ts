import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';

@Component({
    selector: 'app-edition-layout',
    templateUrl: './edition-layout.component.html',
})
export class EditionLayoutComponent {
    @Input() layoutTitle!: string;
    @Output() cancel = new EventEmitter();
    @Output() save = new EventEmitter();

    get form() {
        return this.fg.form;
    }

    /**
     *
     */
    constructor(private fg: FormGroupDirective) {}
}
