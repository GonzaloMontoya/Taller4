import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

private personajes:BehaviorSubject<any> = new BehaviorSubject<any>({});


  constructor() { 
    
  }
}
