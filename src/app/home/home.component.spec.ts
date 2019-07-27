import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BackgroundModule } from '../background/background.module';
import { ClockModule } from '../clock/clock.module';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ClockModule, BackgroundModule],
      declarations: [HomeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have clock`, () => {
    const element = fixture.debugElement.query(By.css('app-clock'));
    expect(element).toBeTruthy();
  });

  it(`should have background`, () => {
    const element = fixture.debugElement.query(By.css('app-background'));
    expect(element).toBeTruthy();
  });

});
