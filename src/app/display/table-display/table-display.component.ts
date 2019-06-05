import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table-display',
  templateUrl: './table-display.component.html',
  styleUrls: ['./table-display.component.css']
})
export class TableDisplayComponent implements OnInit {

  @Input() table: any;
  @Input() linked?: boolean;

  constructor() { }

  count = {};
  size = {};
  headerTop = '';
  headerSide = '';

  ngOnInit() {
    console.log(this.table)
    if (this.table.body) {
      this.size = {width: `${this.table.size}px`}
      this.count = {width: `${this.table.size / this.table.body[0].length}px`}
    }
    if (this.table.headers) {
      this.headerTop = this.table.headers.split('_')[1]
      this.headerSide = this.table.headers.split('_')[0]
    }
  }

}
