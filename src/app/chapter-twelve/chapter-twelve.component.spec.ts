import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterTwelveComponent } from './chapter-twelve.component';

describe('ChapterTwelveComponent', () => {
  let component: ChapterTwelveComponent;
  let fixture: ComponentFixture<ChapterTwelveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapterTwelveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterTwelveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
