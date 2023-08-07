import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NavService } from 'src/app/Services/nav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(public navService: NavService) {
   }

  active = this.navService.active;
  @ViewChild("headerContainer") selectedContainer !:ElementRef;
  
  @ViewChild("headerSection") header!:ElementRef;

  toggleNav(){    
    this.navService.toggleNav();
  }


}
