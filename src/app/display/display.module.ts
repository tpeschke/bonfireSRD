import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { TableDisplayComponent } from './table-display/table-display.component';
import { OuterTableComponent } from './outer-table/outer-table.component';
import { AddSpacePipe } from './add-space.pipe';
import { QuickNavComponent } from './quick-nav/quick-nav.component';
import { RemoveSpacePipe } from './remove-space.pipe';

@NgModule({
  declarations: [
    TableDisplayComponent,
    OuterTableComponent,
    QuickNavComponent,
    AddSpacePipe,
    RemoveSpacePipe
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    QuickNavComponent,
    OuterTableComponent
  ]
})
export class DisplayModule { }
