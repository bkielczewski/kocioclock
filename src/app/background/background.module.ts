import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BackgroundComponent } from './background/background.component';


@NgModule({
  declarations: [
    BackgroundComponent
  ],
  exports: [
    BackgroundComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BackgroundModule {
}
