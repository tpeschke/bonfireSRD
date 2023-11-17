import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-burdenAndInjuriesTable',
  templateUrl: './burdenAndInjuriesTable.component.html',
  styleUrls: ['./burdenAndInjuriesTable.component.css', '../cc-four/cc-four.component.css', '../../../chapter.css']
})
export class BurdenAndInjuriesTableComponent implements OnInit {
  @Input() ibTable: any; 
  @Input() label: any;

  constructor() { }

  ngOnInit() {
    let currentTotal = 0
    this.ibTable = this.ibTable.map(ib => {
      const ibWithCurrentTotal = {...ib, currentTotal}
      currentTotal += ib.weight
      return ibWithCurrentTotal
    })
  }
  

}
