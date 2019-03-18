import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OuterDisplayComponent } from './outer-display.component';

describe('OuterDisplayComponent', () => {
  let component: OuterDisplayComponent;
  let fixture: ComponentFixture<OuterDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OuterDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OuterDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
