import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-outer-display',
  templateUrl: './outer-display.component.html',
  styleUrls: ['./outer-display.component.css']
})
export class OuterDisplayComponent implements OnInit, AfterViewInit {

  @Input() view: any;
  @Input() sidebar: boolean;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    let param = this.route.snapshot.queryParams.search
    if (param) {
      let el = document.getElementById(`${param.replace(/ |-|:|\.|&|'|([()])|\//ig, '')}`)
      if (param && el) {
        el.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })
      }
    }
  }
}
