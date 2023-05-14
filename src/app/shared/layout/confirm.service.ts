import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { defer, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';

@Injectable()
export class ConfirmService {
    constructor(private dialog: MatDialog) {}

    confirm(title: string, content: string): Observable<boolean> {
        return defer(() =>
            this.dialog
                .open(ConfirmModalComponent, {
                    data: {
                        title,
                        content,
                    },
                })
                .afterClosed()
                .pipe(filter((confirmation: boolean) => confirmation))
        );
    }
}
