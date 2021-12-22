import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RrFourComponent } from './rr-four.component';

describe('RrFourComponent', () => {
  let component: RrFourComponent;
  let fixture: ComponentFixture<RrFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RrFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RrFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
