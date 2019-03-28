import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-outer-display',
  templateUrl: './outer-display.component.html',
  styleUrls: ['./outer-display.component.css']
})
export class OuterDisplayComponent implements OnInit {

  @Input() view: any;
  @Input() sidebar: boolean;

  constructor() { }

  ngOnInit() {
  }

}
