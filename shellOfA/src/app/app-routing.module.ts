import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { SigninComponent } from './signin/signin.component';
import { SmartExperimComponent } from './smart-experim/smart-experim.component';

const routes: Routes = [
  {path: '', component: LandingComponent},
  {path:'signIn', component: SigninComponent},
  {path:'smartExperim', component: SmartExperimComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
