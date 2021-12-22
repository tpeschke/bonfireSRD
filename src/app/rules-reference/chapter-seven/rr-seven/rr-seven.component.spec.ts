import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RrSevenComponent } from './rr-seven.component';

describe('RrSevenComponent', () => {
  let component: RrSevenComponent;
  let fixture: ComponentFixture<RrSevenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RrSevenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RrSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
