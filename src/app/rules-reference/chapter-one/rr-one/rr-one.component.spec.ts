import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RrOneComponent } from './rr-one.component';

describe('RrOneComponent', () => {
  let component: RrOneComponent;
  let fixture: ComponentFixture<RrOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RrOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RrOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
