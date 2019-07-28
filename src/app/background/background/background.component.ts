import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Background } from '../shared/background';
import { BackgroundService } from '../shared/background.service';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent implements OnInit, AfterViewInit {

  @ViewChild('videoElement', { read: false, static: false }) videoElement: ElementRef<HTMLVideoElement>;

  constructor(private backgroundService: BackgroundService) {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.playNext();
  }

  onVideoEnded() {
    this.playNext();
  }

  private playNext() {
    this.play(this.backgroundService.getNext());
  }

  private play(background: Background) {
    this.videoElement.nativeElement.src = undefined;
    this.videoElement.nativeElement.load();
    this.videoElement.nativeElement.src = background.url;
    this.videoElement.nativeElement.muted = true;
    this.videoElement.nativeElement.play().catch((e: DOMException) => console.log(e.message));
  }

}
