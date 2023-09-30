import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './part/home/home.component';
import { AllatainkComponent } from './part/allataink/allataink.component';
import { UjallatComponent } from './part/ujallat/ujallat.component';
import { NavComponent } from './part/nav/nav.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AllatainkComponent,
    UjallatComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
