import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterFourteenComponent } from './chapter-fourteen.component';

describe('ChapterFourteenComponent', () => {
  let component: ChapterFourteenComponent;
  let fixture: ComponentFixture<ChapterFourteenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapterFourteenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterFourteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
