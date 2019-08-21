import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterFiveComponent } from './chapter-five.component';

describe('ChapterFiveComponent', () => {
  let component: ChapterFiveComponent;
  let fixture: ComponentFixture<ChapterFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapterFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
