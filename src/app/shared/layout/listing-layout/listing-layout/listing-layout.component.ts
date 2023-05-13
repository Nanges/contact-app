import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-listing-layout',
    templateUrl: './listing-layout.component.html',
    styleUrls: ['./listing-layout.component.scss'],
})
export class ListingLayoutComponent {
    @Input() layoutTitle!: string;
    @Input() addLabel!: string;
}
