import { Injectable } from '@angular/core';
import { Background, BackgroundType } from './background';

@Injectable({
  providedIn: 'root'
})
export class BackgroundService {

  private currentIndex = 0;
  private backgrounds: Background[] = [
    { url: 'https://storage.googleapis.com/coverr-main/mp4%2Fcoverr-the-islands-1561045392058.mp4', type: BackgroundType.VIDEO },
    { url: 'https://storage.googleapis.com/coverr-main/mp4%2Fcoverr-ocean-and-footsteps-1559889043636.mp4', type: BackgroundType.VIDEO },
    { url: 'https://storage.googleapis.com/coverr-main/mp4%2FTwo-Swimmers.mp4', type: BackgroundType.VIDEO }
  ];

  constructor() {
  }

  getNext(): Background {
    return this.backgrounds[this.getCurrentIndexAndIncrease()];
  }

  private getCurrentIndexAndIncrease() {
    if (this.currentIndex >= this.backgrounds.length) {
      this.currentIndex = 0;
    }
    return this.currentIndex++;
  }

}
