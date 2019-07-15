import { AbstractControl, ValidatorFn } from '@angular/forms';

  export function passwordMatches(passwords: Array<string>) {
      if (passwords[0] !== passwords[1]) {
        console.log('Passwords Do Not Match');
        return {'Passwords Do Not Match': true};
     }
      return null;
  }
