import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
 
import { Detail } from './details/detail';
import { DETAILS } from './mock-details';

@Injectable({
  providedIn: 'root',
})

export class DetailsService {

  constructor() { }

  getDetails(): Observable<Detail[]> {
    return of(DETAILS);
  }
}