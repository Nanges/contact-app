import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class CategoryService {
    private _data: string[] = ['professional', 'private'];

    constructor() {}

    /**
     *
     * @returns
     */
    getCategories() {
        return of(this._data);
    }

    /**
     *
     * @param index
     * @returns
     */
    getCategory(index: number) {
        return index >= this._data.length || index < 0 ? throwError(() => new Error('Category not found')) : of(this._data[index]);
    }

    /**
     * @param category
     * @returns last inserted index
     */
    create(category: string) {
        return of(this._data.push(category) - 1);
    }

    update(index: number, category: string) {
        this._data[index] = category;
        return of(null);
    }

    remove(index: number) {
        this._data.splice(index, 1);
        return of(null);
    }
}
