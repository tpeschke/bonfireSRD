import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-link-search',
  templateUrl: './link-search.component.html',
  styleUrls: ['./link-search.component.css']
})
export class LinkSearchComponent implements OnInit {

  @Input() body: any;
  @Input() index: any;

  constructor() { }

  public chapter = null
  public sheet = null
  public type = null

  ngOnInit() {
    if (this.body.substring(0,7)==="Chapter"){
      this.chapter = this.body.substring(8).split(":")[0]
    } else if (this.body === 'character sheet here.') {
      this.sheet = 'link'
    } else if (this.body.substring(0,2) === '+)') {
      this.sheet = this.body.substring(2)
      this.type = 'o'
    } else if (this.body.substring(0,2) === '-)') {
      this.sheet = this.body.substring(2)
      this.type = 'g'
    }
  }

}
