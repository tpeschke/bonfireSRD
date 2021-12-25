import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CcSixComponent } from './cc-six.component';

describe('CcSixComponent', () => {
  let component: CcSixComponent;
  let fixture: ComponentFixture<CcSixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CcSixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CcSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
