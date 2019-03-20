import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayComponent } from './component/display.component';
import { OuterDisplayComponent } from './outer-display/outer-display.component';
import { AppRoutingModule } from '../app-routing.module';
import { LinkSearchComponent } from './link-search/link-search.component';
 
@NgModule({
  declarations: [
    DisplayComponent,
    OuterDisplayComponent,
    LinkSearchComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    OuterDisplayComponent
  ]
})
export class DisplayModule { }
