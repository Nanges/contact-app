import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-layout-header',
    templateUrl: './layout-header.component.html',
    styleUrls: ['./layout-header.component.scss'],
})
export class LayoutHeaderComponent {
    @Input() headerTitle!: string;
}
