import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyresourceRequestsComponent } from './myresource-requests.component';

describe('MyresourceRequestsComponent', () => {
  let component: MyresourceRequestsComponent;
  let fixture: ComponentFixture<MyresourceRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyresourceRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyresourceRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
