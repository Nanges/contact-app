import { Directive, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { iif, of, Subscription } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';
import { ConfirmService } from '../confirm/confirm.service';
import { EditionLayoutComponent } from './edition-layout/edition-layout.component';
import { APP_FORM } from './tokens/app-form';
import { BACK_COMMAND } from './tokens/back-commands';

@Directive({
    selector: 'app-edition-layout[appUseCancellation]',
})
export class UseCancellationDirective implements OnInit, OnDestroy {
    private subscription!: Subscription;

    constructor(
        @Inject(APP_FORM) private form: FormGroup,
        @Inject(BACK_COMMAND) private back: any[],
        private confirmService: ConfirmService,
        private editionLayout: EditionLayoutComponent,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    ngOnInit(): void {
        this.subscription = this.editionLayout.cancel
            .asObservable()
            .pipe(
                switchMap(() =>
                    iif(
                        () => this.form.pristine,
                        of(true),
                        this.confirmService.confirm(
                            `You are leaving`,
                            `You are going to leave with unsaved work. Do you wish to continue ?`
                        )
                    ).pipe(filter((confirmation: boolean) => confirmation))
                )
            )
            .subscribe(() => this.router.navigate(this.back, { relativeTo: this.route }));
    }
}
