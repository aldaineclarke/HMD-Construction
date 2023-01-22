import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  active = false;

  toggleNav(){
    this.active = !this.active;
  }

  ngOnInit(): void {
  }

}
