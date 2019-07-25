import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  time: Date;

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    const source = timer(1000, 500);
    source.subscribe(val => {
      this.time = new Date();
    });
  }

}
