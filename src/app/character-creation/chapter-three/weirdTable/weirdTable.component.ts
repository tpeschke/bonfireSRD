import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-weirdTable',
  templateUrl: './weirdTable.component.html',
  styleUrls: ['./weirdTable.component.css' ,'../../../chapter.css']
})
export class WeirdTableComponent implements OnInit {
  @Input() weirdTable: any; 
  @Input() label: any;

  constructor() { }

  ngOnInit() {
    let currentTotal = 0
    this.weirdTable.rows = this.weirdTable.rows.map(row => {
      const rowWithCurrentTotal = {...row, currentTotal}
      currentTotal += row.weight
      return rowWithCurrentTotal
    })
  }

}
