import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UserameValidators {
    static canNotContainSpace(control: AbstractControl) : ValidationErrors | null {
        if ((control.value as string).indexOf(' ') >= 0)
            return {
                canNotContainSpace: true
            };
        return null;
    }

    static unique(control: AbstractControl) : Promise <ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("1");
                if (control.value == "dragan") {
                    resolve({
                        'unique': true 
                    });
                }
                else 
                    resolve(null);
            }, 3000);
        });
    }
}