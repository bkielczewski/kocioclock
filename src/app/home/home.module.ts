import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClockComponent } from './clock/clock.component';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [
    HomeComponent,
    ClockComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule {
}
