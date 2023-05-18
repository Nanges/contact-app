import { Directive } from '@angular/core';
import { Observable } from 'rxjs';
import { FormMode } from './form-mode';
import { FormModeVisitor } from './from-mode-visitor';

@Directive()
export abstract class FormModeDirective implements FormModeVisitor {
    protected _layoutTitle!: string;
    get layoutTitle() {
        return this._layoutTitle;
    }

    protected _saveHandler$!: Observable<any>;
    get saveHandler$() {
        return this._saveHandler$;
    }

    protected _removeHandler$?: Observable<any>;
    get removeHandler$() {
        return this._removeHandler$;
    }

    protected _confirmTitle: string = '';
    get confirmTitle() {
        return this._confirmTitle;
    }

    protected _confirmContent: string = '';
    get confirmContent() {
        return this._confirmContent;
    }

    /**
     *
     */
    constructor(mode: FormMode) {
        mode.accept(this);
    }

    abstract createMode(): void;
    abstract updateMode(): void;
}
