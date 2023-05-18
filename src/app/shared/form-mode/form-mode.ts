import { Injectable } from '@angular/core';
import { FormModeVisitable } from './from-mode-visitable';
import { FormModeVisitor } from './from-mode-visitor';

@Injectable()
export abstract class FormMode implements FormModeVisitable {
    abstract accept(visitor: FormModeVisitor): void;
}
