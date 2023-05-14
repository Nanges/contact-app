import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material/material.module';
import { BaseLayoutModule } from '../base-layout/base-layout.module';
import { ConfirmModule } from '../confirm/confirm.module';
import { EditionLayoutComponent } from './edition-layout/edition-layout.component';
import { RemoveButtonComponent } from './remove-button/remove-button.component';
import { RemoveHandlerDirective } from './remove-handler.directive';
import { SaveHandlerDirective } from './save-handler.directive';
import { UseCancellationDirective } from './use-cancellation.directive';

@NgModule({
    declarations: [EditionLayoutComponent, RemoveButtonComponent, RemoveHandlerDirective, SaveHandlerDirective, UseCancellationDirective],
    imports: [CommonModule, ReactiveFormsModule, MaterialModule, ConfirmModule, BaseLayoutModule],
    exports: [EditionLayoutComponent, RemoveButtonComponent, RemoveHandlerDirective, SaveHandlerDirective, UseCancellationDirective],
})
export class EditionLayoutModule {}
