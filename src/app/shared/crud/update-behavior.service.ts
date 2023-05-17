import { Injectable, Provider } from '@angular/core';
import { FormBehavior } from './form-behavior';
import { FormBehaviorVisitable } from './form-behavior-visitable';
import { FormBehaviorVisitor } from './form-behavior-visitor';

@Injectable()
export class UpdateBehaviorService implements FormBehaviorVisitable {
    accept(visitor: FormBehaviorVisitor): void {
        visitor.updateBehavior();
    }
}

export const UPDATE_BEHAVIOR: Provider = {
    provide: FormBehavior,
    useClass: UpdateBehaviorService,
};
