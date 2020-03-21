import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { InputComponent } from './helper/input/input.component';
import { OverviewComponent } from './helper/overview/overview.component';
import { DetailviewComponent } from './helper/detailview/detailview.component';
import { InquiryModule } from "./inquiry/inquiry.module";
import { HttpClientModule } from "@angular/common/http";

const appRoutes: Routes =[
  {path: 'home', component: HomeComponent},
  {path: 'helper/input', component: InputComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: HomeComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InputComponent,
    OverviewComponent,
    DetailviewComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    HttpClientModule,
    InquiryModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
