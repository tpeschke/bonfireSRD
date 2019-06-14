import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quick-nav',
  templateUrl: './quick-nav.component.html',
  styleUrls: ['./quick-nav.component.css']
})
export class QuickNavComponent implements OnInit {

  @Input() side: any;

  constructor() { }

  ngOnInit() { }

  scrollToElement(element): void {
    let el = document.querySelector('#' + element.replace(/ |-|:|&|'|([()])|\//ig, '').toUpperCase())
    el.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })
  }

}
