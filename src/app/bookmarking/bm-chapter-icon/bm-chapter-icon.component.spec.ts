import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BmChapterIconComponent } from './bm-chapter-icon.component';

describe('BmChapterIconComponent', () => {
  let component: BmChapterIconComponent;
  let fixture: ComponentFixture<BmChapterIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BmChapterIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BmChapterIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
