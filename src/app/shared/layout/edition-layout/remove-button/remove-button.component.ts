import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-remove-button',
    template: ` <button mat-mini-fab color="warn" [matTooltip]="tooltip" type="button"><mat-icon>delete</mat-icon></button> `,
    styleUrls: ['./remove-button.component.scss'],
})
export class RemoveButtonComponent {
    @Input() tooltip!: string;
}
