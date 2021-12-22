import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RrFiveComponent } from './rr-five.component';

describe('RrFiveComponent', () => {
  let component: RrFiveComponent;
  let fixture: ComponentFixture<RrFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RrFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RrFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
