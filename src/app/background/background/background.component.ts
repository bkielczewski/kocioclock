import { animate, AnimationEvent, state, style, transition, trigger } from '@angular/animations';
import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { Background } from '../shared/background';
import { BackgroundService } from '../shared/background.service';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss'],
  animations: [
    trigger('playStop', [
      state('play', style({
        opacity: 1
      })),
      state('stop', style({
        opacity: 0
      })),
      transition('play => stop', [
        animate('1s')
      ]),
      transition('stop => play', [
        animate('1s')
      ])
    ])
  ]
})
export class BackgroundComponent implements OnInit, AfterViewInit {

  isPlaying = false;
  @ViewChild('videoElement', { read: false, static: false }) videoElement: ElementRef<HTMLVideoElement>;

  constructor(@Inject(PLATFORM_ID) private platformId, private backgroundService: BackgroundService) {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.playRandom();
    }
  }

  onVideoEnded() {
    this.isPlaying = false;
  }

  onAnimationDone($event: AnimationEvent) {
    if ($event.toState === 'stop' && this.videoElement) {
      this.playRandom();
    }
  }

  private playRandom() {
    this.play(this.backgroundService.getRandom());
  }

  private play(background: Background) {
    this.videoElement.nativeElement.pause();
    this.videoElement.nativeElement.removeAttribute('src');
    this.videoElement.nativeElement.load();
    this.videoElement.nativeElement.src = background.url;
    this.videoElement.nativeElement.muted = true;
    this.videoElement.nativeElement.load();
    this.videoElement.nativeElement.play()
      .then(() => this.isPlaying = true)
      .catch((e: DOMException) => console.log(e.message));
  }

}
