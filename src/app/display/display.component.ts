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
  nextType = null

  ngOnInit() {
    if (this.piece.linkid) {
      if (this.piece.nextid) {
        this.nextType = this.piece.nextid.split('.')[1]
      }
      this.type = this.piece.linkid.split('.')[1]
    }
  }

}
