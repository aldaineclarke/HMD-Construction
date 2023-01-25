import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  services = [
    {
      title: "General Construction",
      desc: "We have a wide array of contractor and workers with excellent workmanship to ensure your construction project is realized.",
      img: "/assets/HMDC/ConstructionBlue.jpg"
    },
    {
      title: "Equipment Rental",
      desc: "There is no need to purchase equipment that you may only use once. We rent all construction equipment , both small and heavy duty.",
      img: "/assets/HMDC/Vibratory-Compactor-GC-1024x683.jpeg"

    },
    {
      title: "Construction Planning & Design",
      desc: "Drawing up plans and models for your dream home, we aim to ensure that you have a clear idea of how the finished product will turn out ",
      img: "/assets/HMDC/images.jfif"

    },
    {
      title: "Transportation Solution",
      desc: "Moving into your new home could never have been this easy. Take advantage of our moving and transportation  service.",
      img: "/assets/HMDC/moving truck.jpg"

    },
    {
      title: "Legal Consultation",
      desc: "Our legal team will happily assist with beneficial advice and service to assist with purchase and selling you construction project.",
      img: "/assets/HMDC/construction-consulting-1.jpg"

    },
    {
      title: "Building Maintenance",
      desc: "We also perform construction maintenance to already created projects, make the project looks as good as new.",
      img: "/assets/HMDC/maintenance.jpg"

    },

  ]

  ngOnInit(): void {
  }
  active = false;
  toggleNav(){
    this.active = !this.active;
  }

}
