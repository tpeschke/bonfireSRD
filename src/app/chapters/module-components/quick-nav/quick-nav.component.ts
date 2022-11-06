import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-quick-nav',
  templateUrl: './quick-nav.component.html',
  styleUrls: ['./quick-nav.component.css']
})
export class QuickNavComponent implements OnInit {
  @Input() side: any;

  constructor() { }

  public bottomPositionShown = true;

  ngOnInit() { }

  @HostListener('document:scroll', ['$event'])

  handleScroll(e: any): void {
    if (e.target.documentElement.scrollTop > 560) {
      this.bottomPositionShown = false;
    } else {
      this.bottomPositionShown = true;
    }
  }

  scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0
  }

  scrollToElement(element): void {
    let el = document.getElementById(element.replace(/ |-|:|&|'|([()])|\//ig, ''))
    el.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })
  }

}
