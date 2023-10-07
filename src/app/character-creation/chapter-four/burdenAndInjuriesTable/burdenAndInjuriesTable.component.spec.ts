/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BurdenAndInjuriesTableComponent } from './burdenAndInjuriesTable.component';

describe('BurdenAndInjuriesTableComponent', () => {
  let component: BurdenAndInjuriesTableComponent;
  let fixture: ComponentFixture<BurdenAndInjuriesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BurdenAndInjuriesTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BurdenAndInjuriesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
