import { Component, OnInit, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-quick-nav',
  templateUrl: './quick-nav.component.html',
  styleUrls: ['./quick-nav.component.css']
})
export class QuickNavComponent implements OnInit, OnDestroy {

  @Input() side: any;

  constructor() { }

  ngOnInit() { }

  ngOnDestroy() {
    this.scrollToTop()
  }

  scrollToElement(element): void {
    let el = document.getElementById(element.replace(/ |-|:|&|'|([()])|\//ig, ''))
    el.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })
  }

  scrollToTop(): void {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0
  }

}
