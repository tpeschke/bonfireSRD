import { Component, OnInit, Input } from '@angular/core';
import { headersToString } from 'selenium-webdriver/http';

@Component({
  selector: 'app-table-display',
  templateUrl: './table-display.component.html',
  styleUrls: ['./table-display.component.css']
})
export class TableDisplayComponent implements OnInit {

  @Input() table: any;

  constructor() { }

  count = {};
  size = {};
  headerTop = '';
  headerSide = '';

  ngOnInit() {
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
