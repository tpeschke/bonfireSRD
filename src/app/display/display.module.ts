import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayComponent } from './component/display.component';
import { OuterDisplayComponent } from './outer-display/outer-display.component';
import { AppRoutingModule } from '../app-routing.module';
import { LinkSearchComponent } from './link-search/link-search.component';
import { TableDisplayComponent } from './table-display/table-display.component';
import { OuterTableComponent } from './outer-table/outer-table.component';
import { AddSpacePipe } from './add-space.pipe';
import { QuickNavComponent } from './quick-nav/quick-nav.component';

@NgModule({
  declarations: [
    DisplayComponent,
    OuterDisplayComponent,
    LinkSearchComponent,
    TableDisplayComponent,
    OuterTableComponent,
    QuickNavComponent,
    AddSpacePipe
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    OuterDisplayComponent,
    DisplayComponent,
    QuickNavComponent,
    OuterTableComponent
  ]
})
export class DisplayModule { }
