import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CcThreeDeluxeComponent } from './cc-three-deluxe.component';

describe('CcThreeDeluxeComponent', () => {
  let component: CcThreeDeluxeComponent;
  let fixture: ComponentFixture<CcThreeDeluxeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CcThreeDeluxeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CcThreeDeluxeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
