import { Directive, Inject, Input, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';
import { EditionLayoutComponent } from './edition-layout/edition-layout.component';
import { APP_FORM } from './tokens/app-form';
import { BACK_COMMANDS } from './tokens/back-commands';

@Directive({
    selector: 'app-edition-layout[appSaveHandler]',
})
export class SaveHandlerDirective implements OnInit, OnDestroy {
    private subscription!: Subscription;

    @Input('appSaveHandler') handler$!: Observable<any>;

    constructor(
        @Inject(APP_FORM) private form: FormGroup,
        private editionLayout: EditionLayoutComponent,
        private router: Router,
        private route: ActivatedRoute,
        @Inject(BACK_COMMANDS) private back: any[]
    ) {}

    ngOnInit(): void {
        this.subscription = this.editionLayout.save
            .asObservable()
            .pipe(
                filter(() => this.form.valid),
                switchMap(() => this.handler$)
            )
            .subscribe(() => this.router.navigate(this.back, { relativeTo: this.route }));
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
