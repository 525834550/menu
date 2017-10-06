import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewteamscheduleComponent } from './viewteamschedule.component';

describe('ViewteamscheduleComponent', () => {
  let component: ViewteamscheduleComponent;
  let fixture: ComponentFixture<ViewteamscheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewteamscheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewteamscheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
