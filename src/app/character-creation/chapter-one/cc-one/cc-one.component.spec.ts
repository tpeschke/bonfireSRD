import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CcOneComponent } from './cc-one.component';

describe('CcOneComponent', () => {
  let component: CcOneComponent;
  let fixture: ComponentFixture<CcOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CcOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CcOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
