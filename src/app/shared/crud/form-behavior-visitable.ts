import { FormBehaviorVisitor } from './form-behavior-visitor';

export interface FormBehaviorVisitable {
    accept(visitor: FormBehaviorVisitor): void;
}
