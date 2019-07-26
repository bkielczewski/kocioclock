import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {

  time: Date;

  constructor(@Inject(PLATFORM_ID) private platformId) {
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.runClock();
    }
  }

  runClock() {
    const source = timer(1000, 500);
    source.subscribe(() => {
      this.time = new Date();
    });
  }

}
