import { Component, ElementRef, OnInit, Renderer2, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private renderer: Renderer2) { }

  active = false;
  @ViewChild("headerContainer") selectedContainer !:ElementRef;
  
  @ViewChild("headerSection") header!:ElementRef;

  toggleNav(){
    this.active = !this.active;
  }


}
