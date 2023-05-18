import { Injectable, Provider } from '@angular/core';
import { FormMode } from './form-mode';
import { FormModeVisitable } from './from-mode-visitable';
import { FormModeVisitor } from './from-mode-visitor';

@Injectable()
export class UpdateModeService implements FormModeVisitable {
    accept(visitor: FormModeVisitor): void {
        visitor.updateMode();
    }
}

export const UPDATE_MODE: Provider = {
    provide: FormMode,
    useClass: UpdateModeService,
};
