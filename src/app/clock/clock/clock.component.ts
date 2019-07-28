import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { Subject, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit, OnDestroy {

  time: Date;
  showTick = true;
  private componentDestroyed: Subject<boolean> = new Subject<boolean>();

  constructor(@Inject(PLATFORM_ID) private platformId) {
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.runClock();
    }
  }

  runClock() {
    timer(0, 1000)
      .pipe(
        takeUntil(this.componentDestroyed)
      ).subscribe(() => {
      this.time = new Date();
      this.showTick = !this.showTick;
    });
  }

  ngOnDestroy(): void {
    this.componentDestroyed.next(true);
    this.componentDestroyed.unsubscribe();
  }

}
