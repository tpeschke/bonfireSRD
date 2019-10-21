import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterTenAdvancedComponent } from './chapter-ten-advanced.component';

describe('ChapterTenAdvancedComponent', () => {
  let component: ChapterTenAdvancedComponent;
  let fixture: ComponentFixture<ChapterTenAdvancedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapterTenAdvancedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterTenAdvancedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
