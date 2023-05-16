import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path:"",
    redirectTo : "home",
    pathMatch:"full",
  },
  {
    path:"home",
    component:HomeComponent,
  },
  {
    path:"",
    redirectTo : "about",
    pathMatch:"full",
  },
  {
    path:"about",
    component:AboutComponent,
  },
  {
    path:"register",
    redirectTo : "register",
    pathMatch:"full",
  },
  {
    path:"register",
    component:RegisterComponent,
  },
  {
    path:"register/:id",
    component:RegisterComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
