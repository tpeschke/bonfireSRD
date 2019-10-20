import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterEightAdvancedComponent } from './chapter-eight-advanced.component';

describe('ChapterEightAdvancedComponent', () => {
  let component: ChapterEightAdvancedComponent;
  let fixture: ComponentFixture<ChapterEightAdvancedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapterEightAdvancedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterEightAdvancedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
