import { Injectable, Provider } from '@angular/core';
import { FormMode } from './form-mode';
import { FormModeVisitable } from './from-mode-visitable';
import { FormModeVisitor } from './from-mode-visitor';

@Injectable()
export class CreateModeService implements FormModeVisitable {
    accept(visitor: FormModeVisitor): void {
        visitor.createMode();
    }
}

export const CREATE_MODE: Provider = {
    provide: FormMode,
    useClass: CreateModeService,
};
