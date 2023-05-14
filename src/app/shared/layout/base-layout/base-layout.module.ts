import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { LayoutHeaderComponent } from './layout-header/layout-header.component';

@NgModule({
    declarations: [LayoutHeaderComponent],
    imports: [CommonModule, MaterialModule],
    exports: [LayoutHeaderComponent],
})
export class BaseLayoutModule {}
