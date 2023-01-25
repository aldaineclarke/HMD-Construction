import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Pages/about/about.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { HomeComponent } from './Pages/home/home.component';

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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
