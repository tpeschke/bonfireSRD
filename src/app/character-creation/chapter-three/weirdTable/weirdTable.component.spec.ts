/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WeirdTableComponent } from './weirdTable.component';

describe('WeirdTableComponent', () => {
  let component: WeirdTableComponent;
  let fixture: ComponentFixture<WeirdTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeirdTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeirdTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
