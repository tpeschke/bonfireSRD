import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RrTwoComponent } from './rr-two.component';

describe('RrTwoComponent', () => {
  let component: RrTwoComponent;
  let fixture: ComponentFixture<RrTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RrTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RrTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
