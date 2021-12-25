import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CcTwoComponent } from './cc-two.component';

describe('CcTwoComponent', () => {
  let component: CcTwoComponent;
  let fixture: ComponentFixture<CcTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CcTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CcTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
