import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-link-search',
  templateUrl: './link-search.component.html',
  styleUrls: ['./link-search.component.css']
})
export class LinkSearchComponent implements OnInit {

  @Input() body: any;

  constructor() { }

  public chapter = null

  ngOnInit() {
    if (this.body.substring(0,7)==="Chapter"){
      this.chapter = this.body.substring(0,7).split(":")[0]
      console.log(this.chapter)
    }
  }

}
