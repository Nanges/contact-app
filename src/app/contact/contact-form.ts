import { FormControl, FormGroup, Validators } from '@angular/forms';

export const contactFormFactory = () =>
    new FormGroup({
        firstname: new FormControl(null, Validators.required),
        lastname: new FormControl(null, Validators.required),
        email: new FormControl(null, [Validators.required, Validators.email]),
        phone: new FormControl(null, [Validators.required]),
        category: new FormControl(null, Validators.required),
    });
