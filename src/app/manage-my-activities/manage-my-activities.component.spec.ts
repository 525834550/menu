import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageMyActivitiesComponent } from './manage-my-activities.component';

describe('ManageMyActivitiesComponent', () => {
  let component: ManageMyActivitiesComponent;
  let fixture: ComponentFixture<ManageMyActivitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageMyActivitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageMyActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
