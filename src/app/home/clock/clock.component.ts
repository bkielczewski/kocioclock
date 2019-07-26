import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {

  time: Date;

  constructor() {
  }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    const source = timer(1000, 500);
    source.subscribe(() => {
      this.time = new Date();
    });
  }

}
