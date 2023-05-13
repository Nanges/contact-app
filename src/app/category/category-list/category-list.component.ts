import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CategoryService } from 'src/app/core/category.service';

@Component({
    selector: 'app-category-list',
    templateUrl: './category-list.component.html',
})
export class CategoryListComponent {
    readonly categories$: Observable<string[]>;
    /**
     *
     */
    constructor(private router: Router, private route: ActivatedRoute, private categoryService: CategoryService) {
        this.categories$ = this.categoryService.getCategories();
    }

    addCategory() {
        this.router.navigate(['add'], { relativeTo: this.route });
    }
}
