import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterElevenComponent } from './chapter-eleven.component';

describe('ChapterElevenComponent', () => {
  let component: ChapterElevenComponent;
  let fixture: ComponentFixture<ChapterElevenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapterElevenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterElevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
