import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BmQuickNavComponent } from './bm-quick-nav.component';

describe('BmQuickNavComponent', () => {
  let component: BmQuickNavComponent;
  let fixture: ComponentFixture<BmQuickNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BmQuickNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BmQuickNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
