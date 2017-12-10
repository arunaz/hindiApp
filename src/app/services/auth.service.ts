import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  
  test(formData): string {
    console.log("  service file", formData)
    return 'working';
  }
}
