import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterNineComponent } from './chapter-nine.component';

describe('ChapterNineComponent', () => {
  let component: ChapterNineComponent;
  let fixture: ComponentFixture<ChapterNineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapterNineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
