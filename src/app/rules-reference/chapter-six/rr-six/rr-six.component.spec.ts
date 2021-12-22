import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RrSixComponent } from './rr-six.component';

describe('RrSixComponent', () => {
  let component: RrSixComponent;
  let fixture: ComponentFixture<RrSixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RrSixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RrSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
