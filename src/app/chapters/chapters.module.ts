import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuickNavComponent } from './module-components/quick-nav/quick-nav.component';

import { BmChapterIconComponent } from './module-components/bm-chapter-icon/bm-chapter-icon.component'

@NgModule({
  declarations: [
    BmChapterIconComponent,
    QuickNavComponent
  ],
  imports: [
    CommonModule
  ],
   exports: [
    BmChapterIconComponent,
    QuickNavComponent
  ]
})
export class ChaptersModule { }
