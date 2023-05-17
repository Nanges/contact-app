import { Injectable, Provider } from '@angular/core';
import { FormBehavior } from './form-behavior';
import { FormBehaviorVisitable } from './form-behavior-visitable';
import { FormBehaviorVisitor } from './form-behavior-visitor';

@Injectable()
export class AddBehaviorService implements FormBehaviorVisitable {
    accept(visitor: FormBehaviorVisitor): void {
        visitor.addBehavior();
    }
}

export const ADD_BEHAVIOR: Provider = {
    provide: FormBehavior,
    useClass: AddBehaviorService,
};
