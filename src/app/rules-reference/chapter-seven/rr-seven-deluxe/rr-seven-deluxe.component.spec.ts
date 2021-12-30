import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RrSevenDeluxeComponent } from './rr-seven-deluxe.component';

describe('RrSevenDeluxeComponent', () => {
  let component: RrSevenDeluxeComponent;
  let fixture: ComponentFixture<RrSevenDeluxeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RrSevenDeluxeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RrSevenDeluxeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
