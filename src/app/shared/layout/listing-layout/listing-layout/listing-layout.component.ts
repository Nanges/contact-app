import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-listing-layout',
    templateUrl: './listing-layout.component.html',
})
export class ListingLayoutComponent {
    @Input() layoutTitle!: string;
}
