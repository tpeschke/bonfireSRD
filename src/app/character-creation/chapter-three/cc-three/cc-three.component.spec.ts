import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CcThreeComponent } from './cc-three.component';

describe('CcThreeComponent', () => {
  let component: CcThreeComponent;
  let fixture: ComponentFixture<CcThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CcThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CcThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
