import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterThirteenComponent } from './chapter-thirteen.component';

describe('ChapterThirteenComponent', () => {
  let component: ChapterThirteenComponent;
  let fixture: ComponentFixture<ChapterThirteenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapterThirteenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterThirteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
