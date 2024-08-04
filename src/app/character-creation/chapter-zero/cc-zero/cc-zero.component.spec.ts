/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CcZeroComponent } from './cc-zero.component';

describe('CcZeroComponent', () => {
  let component: CcZeroComponent;
  let fixture: ComponentFixture<CcZeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CcZeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CcZeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
