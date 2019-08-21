import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BmChapterIconComponent } from './bm-chapter-icon/bm-chapter-icon.component';

import { BmQuickNavComponent } from './bm-quick-nav/bm-quick-nav.component';

@NgModule({
  declarations: [
    BmChapterIconComponent,
    BmQuickNavComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BmChapterIconComponent,
    BmQuickNavComponent
  ]
})
export class BookmarkingModule { }
