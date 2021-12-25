import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CcSevenComponent } from './cc-seven.component';

describe('CcSevenComponent', () => {
  let component: CcSevenComponent;
  let fixture: ComponentFixture<CcSevenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CcSevenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CcSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
