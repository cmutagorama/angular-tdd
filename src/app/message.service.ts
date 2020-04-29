import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor() {}

  getContent(): Observable<any> {
    return new Observable((observer) => {
      observer.next('You have been warned!');
      observer.complete();
    });
  }
}
