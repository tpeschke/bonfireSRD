import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayComponent } from './component/display.component';
import { OuterDisplayComponent } from './outer-display/outer-display.component';
import { AppRoutingModule } from '../app-routing.module';
import { LinkSearchComponent } from './link-search/link-search.component';
import { TableDisplayComponent } from './table-display/table-display.component';
 
@NgModule({
  declarations: [
    DisplayComponent,
    OuterDisplayComponent,
    LinkSearchComponent,
    TableDisplayComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    OuterDisplayComponent,
    DisplayComponent,
    TableDisplayComponent
  ]
})
export class DisplayModule { }
