import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  test(): string {
    console.log("  service file")
    return 'working';
  }
}
