import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenarioModelingComponent } from './scenario-modeling.component';

describe('ScenarioModelingComponent', () => {
  let component: ScenarioModelingComponent;
  let fixture: ComponentFixture<ScenarioModelingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScenarioModelingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenarioModelingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
