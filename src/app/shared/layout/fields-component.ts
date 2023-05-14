import { InjectionToken } from '@angular/core';
import { FormGroup } from '@angular/forms';

export interface FieldsComponent {
    readonly form: FormGroup;
}

export const FIELDS_COMPONENT = new InjectionToken<FieldsComponent>('FIELDS_COMPONENT');
