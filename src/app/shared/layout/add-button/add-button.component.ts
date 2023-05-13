import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-add-button',
    template: `<button mat-mini-fab color="accent" [matTooltip]="tooltip"><mat-icon>add</mat-icon></button>`,
    styleUrls: ['./add-button.component.scss'],
})
export class AddButtonComponent {
    @Input() tooltip!: string;
}
