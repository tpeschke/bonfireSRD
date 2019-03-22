import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table-display',
  templateUrl: './table-display.component.html',
  styleUrls: ['./table-display.component.css']
})
export class TableDisplayComponent implements OnInit {

  @Input() table: any;

  constructor() { }

  count = {};

  ngOnInit() {
    console.log(this.table)
    if (this.table.body) {
      this.count = {width: `${300 / Object.keys(this.table.body).length}px`}
    }
  }

}
