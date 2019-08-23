import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BmQuickNavComponent } from './bm-quick-nav/bm-quick-nav.component';

@NgModule({
  declarations: [
    BmQuickNavComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BmQuickNavComponent
  ]
})
export class BookmarkingModule { }
