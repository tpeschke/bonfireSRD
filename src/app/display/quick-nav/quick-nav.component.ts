import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quick-nav',
  templateUrl: './quick-nav.component.html',
  styleUrls: ['./quick-nav.component.css']
})
export class QuickNavComponent implements OnInit {

  @Input() side: any;
  
  constructor() { }

  ngOnInit() {
  }

  scrollToElement(element): void {
    console.log('#' + element.replace(/ |-/g, '').toUpperCase().toString())
                '#ANTIMAGICIALBLANK'
    console.log('#ANTIMAGICALBLANK' === '#' + element.replace(/ |-/g, '').toUpperCase())
    let el = document.querySelector('#' + element.replace(/ |-/g, '').toUpperCase())
    console.log(el)
    el.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
  }

}
