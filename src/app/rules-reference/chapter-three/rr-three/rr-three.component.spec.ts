import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RrThreeComponent } from './rr-three.component';

describe('RrThreeComponent', () => {
  let component: RrThreeComponent;
  let fixture: ComponentFixture<RrThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RrThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RrThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
