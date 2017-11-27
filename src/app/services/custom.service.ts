import { Injectable } from '@angular/core';

@Injectable()
export class CustomService {

  constructor() { }

  test(): string {
    return 'working';
  }

}
