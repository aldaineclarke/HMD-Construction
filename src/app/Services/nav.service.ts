import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  constructor() { }

  active = false; //

  
  toggleNav(){
    this.active = !this.active;
  }
}
