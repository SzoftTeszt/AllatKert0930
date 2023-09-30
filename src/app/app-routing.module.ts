import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllatainkComponent } from './part/allataink/allataink.component';
import { UjallatComponent } from './part/ujallat/ujallat.component';
import { HomeComponent } from './part/home/home.component';

const routes: Routes = [
  {path:"allataink", component:AllatainkComponent},
  {path:"ujallat", component:UjallatComponent},
  {path:"home", component:HomeComponent},
  {path:" ", redirectTo:'home'},
  {path:"**", redirectTo:'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
