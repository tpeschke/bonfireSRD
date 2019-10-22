import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterSevenAdvancedComponent } from './chapter-seven-advanced.component';

describe('ChapterSevenAdvancedComponent', () => {
  let component: ChapterSevenAdvancedComponent;
  let fixture: ComponentFixture<ChapterSevenAdvancedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapterSevenAdvancedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterSevenAdvancedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
