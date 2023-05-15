import { InjectionToken, Provider } from '@angular/core';
import { FormGroup } from '@angular/forms';

export const APP_FORM = new InjectionToken<FormGroup>('Form used by/in edition layout');

export const appForm: (factory: () => FormGroup) => Provider = (factory: () => FormGroup) => ({
    provide: APP_FORM,
    useFactory: factory,
});
