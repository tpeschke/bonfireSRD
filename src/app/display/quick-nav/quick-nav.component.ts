import { Component, OnInit, Input, AfterViewChecked, HostListener } from '@angular/core';

@Component({
  selector: 'app-quick-nav',
  templateUrl: './quick-nav.component.html',
  styleUrls: ['./quick-nav.component.css']
})
export class QuickNavComponent implements OnInit, AfterViewChecked {

  @Input() side: any;

  constructor() { }

  public fixedHeight = null
  public bannerStyle = { top: '0px', display: 'none', position: 'absolute' }
  public secondBanner = { display: 'inherit' }
  public firstTime = false

  ngOnInit() {
    this.firstTime = true
  }
  
  ngAfterViewChecked() {
    if (this.firstTime) {
      this.bannerStyle = { top: '0px', display: 'none', position: 'absolute' }
      this.secondBanner = { display: 'inherit' }
      if (!this.fixedHeight) {
        let item = document.getElementById('bottom')
        this.fixedHeight = item.offsetTop
        this.bannerStyle = { top: this.fixedHeight + 150 + 'px', display: 'inherit', position: 'fixed' }
        this.secondBanner = { display: 'none' }
      }
      this.firstTime = false
    }
  }

  @HostListener('document:scroll', ['$event'])

  handleScroll(e: any): void {
    let height = this.fixedHeight + 150 - e.target.documentElement.scrollTop < 100 ? 100 : this.fixedHeight + 150 - e.target.documentElement.scrollTop
    this.bannerStyle = { top: height + 'px', display: 'inherit', position: 'fixed' }
    this.secondBanner = { display: 'none' }
  }

  scrollToElement(element): void {
    let el = document.querySelector('#' + element.replace(/ |-|([()])|\//ig, '').toUpperCase())
    el.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })
  }

}
