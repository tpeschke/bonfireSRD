import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RrThreeDeluxeComponent } from './rr-three-deluxe.component';

describe('RrThreeDeluxeComponent', () => {
  let component: RrThreeDeluxeComponent;
  let fixture: ComponentFixture<RrThreeDeluxeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RrThreeDeluxeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RrThreeDeluxeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
