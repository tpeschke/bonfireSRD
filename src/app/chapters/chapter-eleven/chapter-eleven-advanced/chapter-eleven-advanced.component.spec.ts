import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterElevenAdvancedComponent } from './chapter-eleven-advanced.component';

describe('ChapterElevenAdvancedComponent', () => {
  let component: ChapterElevenAdvancedComponent;
  let fixture: ComponentFixture<ChapterElevenAdvancedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapterElevenAdvancedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterElevenAdvancedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
