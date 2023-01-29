import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavService } from 'src/app/Services/nav.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor(public navService: NavService) { }

  @ViewChild("carousel_wrapper") carouselSlider !: ElementRef;
  @ViewChild("prev") prevArrow !: ElementRef;
  @ViewChild("next") nextArrow !: ElementRef;
  @ViewChild("mobileNav") mobileNav!:ElementRef;
  @ViewChild("hamburger") hamburger!:ElementRef;

  projects = [
    {
      img:"/assets/HMDC/large-home-g6c9303983_1280.jpg",
      name:"Two Storey Home",
      duration:"8 Months",
      work: "General Construction"
    },
    {
      img:"/assets/HMDC/architecture-gba45d817b_1920.jpg",
      name:"Two Storey Home",
      duration:"8 Months",
      work: "General Construction"
    },
    {
      img:"/assets/HMDC/restored-home-gd237d4e09_1920.jpg",
      name:"Township Home",
      duration:"3 Months",
      work: "Building Mentenace"
    },
    {
      img:"/assets/HMDC/construction-g68122eaac_1920.jpg",
      name:"Two Storey Home",
      duration:"8 Months",
      work: "General Construction"
    },
    {
      img:"/assets/HMDC/sa-rapita-gcf8a1a55e_1920.jpg",
      name:"Two Storey Home",
      duration:"8 Months",
      work: "General Construction"
    },
    {
      img:"/assets/HMDC/large-home-g6c9303983_1280.jpg",
      name:"Two Storey Home",
      duration:"8 Months",
      work: "General Construction"
    }
  ];

  slider!:HTMLElement;
  nextBtn!: HTMLElement;
  prevBtn!:HTMLElement;
  index = 1;
  slides:HTMLElement[] = []; 
  translateByVal = 0;
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
    if(window.innerWidth < 760) {
      this.index = 0

    }
    console.log(this.navService.active);
    
  }
  active = false;
  toggleNav(){
    (this.mobileNav.nativeElement as HTMLElement).style.transition = "";

    this.navService.toggleNav();
  }

  ngAfterViewInit(): void {

    this.slider = this.carouselSlider.nativeElement;
    console.log(this.navService.active);
    (this.mobileNav.nativeElement as HTMLElement).style.transition = "none";
    this.nextBtn = this.nextArrow.nativeElement;
    this.prevBtn = this.prevArrow.nativeElement;
    this.slider.querySelectorAll(".carousel__slide").forEach((item, index)=>{
      if(index == 0){
        item.classList.add("prev");
      }else if(index == this.index){
        item.classList.add("active");
      }else if(index == 2){
        item.classList.add("next");
      }
      this.translateByVal = Math.max(this.translateByVal, item.clientWidth)
      this.slides.push(item as HTMLElement);
    });
    



  }


  nextSlide():void {
    this.index++;
    console.log(this.index)
    if(this.index >= 0){
      this.prevBtn.style.display = "flow-root";
    }if(this.index >= 5){
      this.nextBtn.style.display = "none";
    }else if(this.index > 5){ return};
    if(window.innerWidth < 760){
      this. slider.style.transform = `translateX(-${this.translateByVal * (this.index)}px)`;
    }else{
      this. slider.style.transform = `translateX(-${this.translateByVal * (this.index-1)}px)`;

    }
    this.slides[this.index-1].classList.replace("active", "prev");
    this.slides[this.index].classList.replace("next", "active");
    if(this.index < 5){
      this.slides[this.index + 1].classList.add("next");
    }

    
  }
  resetActiveSlide(slides:HTMLElement[]){
    slides.forEach((slide)=>{
      slide.classList.remove("active");
    })
  }

  previousSlide():void{
    this.index--;
    console.log(this.index);
    if(this.index < 1){
      this.prevBtn.style.display = "none";
    }else if(this.index <= 5){
      this.nextBtn.style.display = "flow-root"
    }
    else{
      return
    }
    if(window.innerWidth < 760){
      this. slider.style.transform = `translateX(-${this.translateByVal * (this.index)}px)`;
    }else{
      this. slider.style.transform = `translateX(${-this.translateByVal * (this.index-1)}px)`;

    }
    this.slides[this.index+1].classList.replace("active", "next");
    this.slides[this.index].classList.replace("prev", "active");
  }

}
