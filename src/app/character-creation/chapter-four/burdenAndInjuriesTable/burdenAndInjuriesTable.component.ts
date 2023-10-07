import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-burdenAndInjuriesTable',
  templateUrl: './burdenAndInjuriesTable.component.html',
  styleUrls: ['./burdenAndInjuriesTable.component.css', '../cc-four/cc-four.component.css', '../../../chapter.css']
})
export class BurdenAndInjuriesTableComponent implements OnInit {
  @Input() flawTable: any; 
  @Input() label: any;

  constructor() { }

  ngOnInit() {
    let currentTotal = 0
    this.flawTable = this.flawTable.map(flaw => {
      const flawWithCurrentTotal = {...flaw, currentTotal}
      currentTotal += flaw.weight
      return flawWithCurrentTotal
    })
  }
  

}
