import { forwardRef, InjectionToken } from '@angular/core';
import { EditionLayoutModule } from '../edition-layout.module';

export const BACK_COMMAND = new InjectionToken<any[]>('Back commands used by `router.navigate` on cancellation, save or remove action', {
    factory: () => ['..'],
    providedIn: forwardRef(() => EditionLayoutModule),
});
