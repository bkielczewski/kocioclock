import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BackgroundModule } from '../background/background.module';
import { ClockModule } from '../clock/clock.module';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ClockModule,
    BackgroundModule
  ]
})
export class HomeModule {
}
