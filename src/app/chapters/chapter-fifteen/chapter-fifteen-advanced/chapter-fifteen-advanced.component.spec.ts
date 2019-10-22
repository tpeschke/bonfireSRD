import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterFifteenAdvancedComponent } from './chapter-fifteen-advanced.component';

describe('ChapterFifteenAdvancedComponent', () => {
  let component: ChapterFifteenAdvancedComponent;
  let fixture: ComponentFixture<ChapterFifteenAdvancedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapterFifteenAdvancedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterFifteenAdvancedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
