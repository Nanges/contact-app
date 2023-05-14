import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { ConfirmService } from './confirm.service';

@NgModule({
    declarations: [ConfirmModalComponent],
    imports: [CommonModule, MaterialModule],
    providers: [ConfirmService],
})
export class ConfirmModule {}
