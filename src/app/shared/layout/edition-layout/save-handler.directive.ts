import { Directive, HostListener, Inject, Input, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject, takeUntil } from 'rxjs';
import { APP_FORM } from './tokens/app-form';
import { BACK_COMMANDS } from './tokens/back-commands';

@Directive({
    selector: 'app-edition-layout[appSaveHandler]',
})
export class SaveHandlerDirective implements OnDestroy {
    private cancel = new Subject();

    @HostListener('save')
    save(t: any) {
        if (!this.form.valid) return;
        this.cancel.next(void 0);
        this.handler$.pipe(takeUntil(this.cancel)).subscribe(() => this.router.navigate(this.back, { relativeTo: this.route }));
    }

    @Input('appSaveHandler') handler$!: Observable<any>;

    constructor(
        @Inject(APP_FORM) private form: FormGroup,
        @Inject(BACK_COMMANDS) private back: any[],
        private router: Router,
        private route: ActivatedRoute
    ) {}

    ngOnDestroy(): void {
        this.cancel.next(void 0);
    }
}
