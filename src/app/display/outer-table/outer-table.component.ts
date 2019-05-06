import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-outer-table',
  templateUrl: './outer-table.component.html',
  styleUrls: ['./outer-table.component.css']
})
export class OuterTableComponent implements OnInit {

  @Input() tables: any;
  @Input() linked?: boolean;

  constructor() { }

  ngOnInit() {
  }

}
