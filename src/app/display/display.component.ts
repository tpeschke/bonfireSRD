import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  @Input() piece: any;
  
  constructor() { }

  type = null

  ngOnInit() {
    if (this.piece.linkid) {
      this.type = this.piece.linkid.split('.')[1]
      console.log(this.type)
    }
  }

}
