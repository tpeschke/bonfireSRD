import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RrFiveDeluxeComponent } from './rr-five-deluxe.component';

describe('RrFiveDeluxeComponent', () => {
  let component: RrFiveDeluxeComponent;
  let fixture: ComponentFixture<RrFiveDeluxeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RrFiveDeluxeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RrFiveDeluxeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
