import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapteroneComponent } from './chapterone.component';

describe('ChapteroneComponent', () => {
  let component: ChapteroneComponent;
  let fixture: ComponentFixture<ChapteroneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapteroneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapteroneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
