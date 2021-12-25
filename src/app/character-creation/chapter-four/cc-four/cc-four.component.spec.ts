import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CcFourComponent } from './cc-four.component';

describe('CcFourComponent', () => {
  let component: CcFourComponent;
  let fixture: ComponentFixture<CcFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CcFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CcFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
