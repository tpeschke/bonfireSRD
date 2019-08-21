import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterFifteenComponent } from './chapter-fifteen.component';

describe('ChapterFifteenComponent', () => {
  let component: ChapterFifteenComponent;
  let fixture: ComponentFixture<ChapterFifteenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapterFifteenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterFifteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
