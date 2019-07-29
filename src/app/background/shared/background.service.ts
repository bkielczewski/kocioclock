import { Injectable } from '@angular/core';
import { Background, BackgroundType } from './background';

@Injectable({
  providedIn: 'root'
})
export class BackgroundService {

  private currentIndex = 0;
  private backgrounds: Background[] = [
    { url: 'https://storage.googleapis.com/coverr-main/mp4%2FBoat%20in%20Caramoan.mp4', type: BackgroundType.VIDEO },
    { url: 'https://storage.googleapis.com/coverr-main/mp4%2FGubat%20Beach.mp4', type: BackgroundType.VIDEO },
    { url: 'https://storage.googleapis.com/coverr-main/mp4%2Fcoverr-clear-water-1559888911402.mp4', type: BackgroundType.VIDEO },
    { url: 'https://storage.googleapis.com/coverr-main/mp4%2FBlue%20Joy.mp4', type: BackgroundType.VIDEO },
    { url: 'https://storage.googleapis.com/coverr-main/mp4%2FFerry_Tour.mp4', type: BackgroundType.VIDEO },
    { url: 'https://storage.googleapis.com/coverr-main/mp4%2Fcoverr-the-islands-1561045392058.mp4', type: BackgroundType.VIDEO },
    { url: 'https://storage.googleapis.com/coverr-main/mp4%2Fcoverr-ocean-and-footsteps-1559889043636.mp4', type: BackgroundType.VIDEO },
    { url: 'https://storage.googleapis.com/coverr-main/mp4%2FTwo-Swimmers.mp4', type: BackgroundType.VIDEO },
    { url: 'https://storage.googleapis.com/coverr-main/mp4%2Fcoverr-spider-boat-1561050987454.mp4', type: BackgroundType.VIDEO }
  ];

  constructor() {
  }

  getRandom(): Background {
    return this.backgrounds[Math.floor(Math.random() * this.backgrounds.length)];
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
