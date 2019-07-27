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
  private componentDestroyed: Subject<boolean> = new Subject<boolean>();

  constructor(@Inject(PLATFORM_ID) private platformId) {
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.runClock();
    }
  }

  runClock() {
    timer(1000, 500)
      .pipe(
        takeUntil(this.componentDestroyed)
      ).subscribe(() => {
      this.time = new Date();
    });
  }

  ngOnDestroy(): void {
    this.componentDestroyed.next(true);
    this.componentDestroyed.unsubscribe();
  }

}
