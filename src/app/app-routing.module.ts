import { NgModule } from '@angular/core';
import { ExtraOptions, Router, RouterEvent, RouterModule, Routes } from '@angular/router';
import { filter } from 'rxjs';
import { AboutComponent } from './Pages/about/about.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { HomeComponent } from './Pages/home/home.component';
import { NavService } from './Services/nav.service';


const routerOptions: ExtraOptions = {
  anchorScrolling: "enabled",
  scrollPositionRestoration: "enabled",
}

const routes: Routes = [
  {
    path: 'home',component: HomeComponent
  }, 
  {
    path: 'about',component: AboutComponent
  }, 
  {
    path: 'contact',component: ContactComponent
  }, 
  {
    path: '',redirectTo: "/home", pathMatch:"full"
  },
  {
    path: "**", pathMatch:"full", redirectTo: "/home"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  constructor(public router: Router, private navService: NavService){
    this.router.events.pipe(
      filter((e): e is RouterEvent => e instanceof RouterEvent)
   ).subscribe((event)=>{
      this.navService.active = false;
    });
  }
}
