import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RrSixDeluxeComponent } from './rr-six-deluxe.component';

describe('RrSixDeluxeComponent', () => {
  let component: RrSixDeluxeComponent;
  let fixture: ComponentFixture<RrSixDeluxeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RrSixDeluxeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RrSixDeluxeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
