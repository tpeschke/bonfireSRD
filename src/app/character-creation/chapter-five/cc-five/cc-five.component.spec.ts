import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CcFiveComponent } from './cc-five.component';

describe('CcFiveComponent', () => {
  let component: CcFiveComponent;
  let fixture: ComponentFixture<CcFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CcFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CcFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
