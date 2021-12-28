import { Component, OnInit } from '@angular/core';
import tables from '../tables'

@Component({
  selector: 'app-cc-six',
  templateUrl: './cc-six.component.html',
  styleUrls: ['./cc-six.component.css', '../../../chapter.css']
})
export class CcSixComponent implements OnInit {

  constructor() { }

  tables = tables.tables;
  multi = tables.multipliers

  ngOnInit() {
  }

}
