import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {


  quoteFormSubmitted = false;
  contactFormSubmitted = false;

  services = ["General Construction", "Equipment Rental", "Construction Planning and Design", "Transportation Solution", "Legal Consultation", "Building Maintenance"];
  quoteForm = this.fb.group({
    name: new FormControl("",[Validators.required, Validators.minLength(3)]),
    email: new FormControl("", [Validators.required, Validators.email]),
    phone: new FormControl("", [Validators.required]),
    message: new FormControl("", [Validators.required, Validators.minLength(3)]),
    service: new FormControl(""),
  });

  contactForm = this.fb.group({
    name: new FormControl("",[Validators.required, Validators.minLength(3)]),
    email: new FormControl("",[Validators.required, Validators.email]),
    message: new FormControl("" ,[Validators.required, Validators.minLength(3)]),
  })
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  submitQuote(){
    this.quoteFormSubmitted = true;
    if(this.quoteForm.valid){
      alert("Successfully requested quote");
    }
  }
  submitFeedback(){
    this.contactFormSubmitted = true;
    if(this.contactForm.valid){
      alert("Contactform successfully submitted")
    }
  }

}
