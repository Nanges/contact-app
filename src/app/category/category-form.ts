import { FormControl, FormGroup, Validators } from '@angular/forms';

export const categoryFormFactory = () =>
    new FormGroup({
        category: new FormControl(null, Validators.required),
    });
