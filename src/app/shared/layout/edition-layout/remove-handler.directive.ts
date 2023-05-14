import { Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { fromEvent, Observable, Subscription } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';
import { ConfirmService } from '../confirm/confirm.service';

@Directive({
    selector: 'app-remove-button[appRemoveHandler]',
})
export class RemoveHandlerDirective implements OnInit, OnDestroy {
    private subscription!: Subscription;

    @Input('appRemoveHandler') handler$!: Observable<any>;
    @Input() confirmTitle!: string;
    @Input() confirmContent!: string;

    constructor(
        private confirmService: ConfirmService,
        private router: Router,
        private route: ActivatedRoute,
        private elementRef: ElementRef<HTMLElement>
    ) {}

    ngOnInit(): void {
        this.subscription = fromEvent(this.elementRef.nativeElement, 'click')
            .pipe(
                switchMap(() => this.confirmService.confirm(this.confirmTitle, this.confirmContent)),
                filter((confirmation: boolean) => confirmation),
                switchMap(() => this.handler$)
            )
            .subscribe(() => this.router.navigate(['..'], { relativeTo: this.route }));
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
