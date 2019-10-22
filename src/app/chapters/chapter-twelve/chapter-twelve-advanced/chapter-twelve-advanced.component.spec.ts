import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterTwelveAdvancedComponent } from './chapter-twelve-advanced.component';

describe('ChapterTwelveAdvancedComponent', () => {
  let component: ChapterTwelveAdvancedComponent;
  let fixture: ComponentFixture<ChapterTwelveAdvancedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapterTwelveAdvancedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterTwelveAdvancedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
