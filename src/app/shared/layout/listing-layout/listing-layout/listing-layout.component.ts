import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-listing-layout',
    templateUrl: './listing-layout.component.html',
})
export class ListingLayoutComponent {
    @Input() layoutTitle!: string;
    @Input() addLabel!: string;
    @Output() add = new EventEmitter();
}
