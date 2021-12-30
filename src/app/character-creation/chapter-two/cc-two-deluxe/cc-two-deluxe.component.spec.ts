import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CcTwoDeluxeComponent } from './cc-two-deluxe.component';

describe('CcTwoDeluxeComponent', () => {
  let component: CcTwoDeluxeComponent;
  let fixture: ComponentFixture<CcTwoDeluxeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CcTwoDeluxeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CcTwoDeluxeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
