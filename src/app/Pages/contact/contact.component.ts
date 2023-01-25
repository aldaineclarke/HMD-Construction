import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {


  services = ["General Construction", "Equipment Rental", "Construction Planning and Design", "Transportation Solution", "Legal Consultation", "Building Maintenance"];

  constructor() { }

  ngOnInit(): void {
  }

}
