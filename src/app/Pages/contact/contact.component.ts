import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {


  services = ["General Construction", "Equipment Rental", "Construction Planning and Design", "Transportation Solution", "Legal Consultation", "Building Maintenance"];
  quoteForm = this.fb.group({
    name: new FormControl(""),
    email: new FormControl(""),
    phone: new FormControl(""),
    message: new FormControl(""),
    service: new FormControl(""),
  });

  contactForm = this.fb.group({
    name: new FormControl(""),
    email: new FormControl(""),
    message: new FormControl(""),
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  submitQuote(){
    console.log(this.quoteForm.value)
  }
  submitFeedback(){
    console.log(this.contactForm.value)
  }

}
