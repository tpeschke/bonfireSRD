import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterFourAdvancedComponent } from './chapter-four-advanced.component';

describe('ChapterFourAdvancedComponent', () => {
  let component: ChapterFourAdvancedComponent;
  let fixture: ComponentFixture<ChapterFourAdvancedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapterFourAdvancedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterFourAdvancedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
