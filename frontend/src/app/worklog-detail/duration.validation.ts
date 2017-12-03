import {AbstractControl, ValidatorFn} from "@angular/forms";



export function durationValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const invalid = !nameRe.test(control.value);
    return invalid ? {'Invalid': 'Invalid!'}: null;
  };
}

//^(0[0-9]|1[0-9]|2[0-4]):[0-5]?[0-9]:[0-5]?[0-9]
