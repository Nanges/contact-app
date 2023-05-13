import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-edition-layout',
    templateUrl: './edition-layout.component.html',
})
export class EditionLayoutComponent {
    @Input() layoutTitle!: string;
}
