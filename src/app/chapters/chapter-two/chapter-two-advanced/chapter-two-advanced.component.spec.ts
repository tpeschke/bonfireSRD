import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterTwoAdvancedComponent } from './chapter-two-advanced.component';

describe('ChapterTwoAdvancedComponent', () => {
  let component: ChapterTwoAdvancedComponent;
  let fixture: ComponentFixture<ChapterTwoAdvancedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapterTwoAdvancedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterTwoAdvancedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
