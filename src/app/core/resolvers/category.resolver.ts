import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CategoryService } from '../category.service';

@Injectable({
    providedIn: 'root',
})
export class CategoryResolver implements Resolve<string> {
    constructor(private categoryService: CategoryService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<string> {
        const id = route.params['categoryId'];
        if (id === undefined) throw new Error('CategoryId not provided');

        return this.categoryService.getCategory(+id);
    }
}
