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
    console.log(element.toUpperCase().split(' ')[0])
    let el = document.querySelector('#' + element.toUpperCase().split(' ')[0])
    el.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
  }

}
