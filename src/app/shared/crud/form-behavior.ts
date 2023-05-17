import { Injectable } from '@angular/core';
import { FormBehaviorVisitable } from './form-behavior-visitable';
import { FormBehaviorVisitor } from './form-behavior-visitor';

@Injectable()
export abstract class FormBehavior implements FormBehaviorVisitable {
    abstract accept(visitor: FormBehaviorVisitor): void;
}
