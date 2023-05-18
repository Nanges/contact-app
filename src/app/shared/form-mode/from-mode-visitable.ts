import { FormModeVisitor } from './from-mode-visitor';

export interface FormModeVisitable {
    accept(visitor: FormModeVisitor): void;
}
