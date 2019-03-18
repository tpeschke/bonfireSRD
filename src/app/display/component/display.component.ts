import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  @Input() piece: any;
  
  constructor(
    private router: Router
  ) { }

  type = null
  nextType = null
  linkEnd = null

  ngOnInit() {
    if (this.piece.linkid) {
      if (this.piece.nextid) {
        this.nextType = this.piece.nextid.split('.')[1]
      }
      this.type = this.piece.linkid.split('.')[1]
    }
    if (this.type === 'l') {
      this.linkEnd = this.piece.body.split('Chapter ')[1].split(':')[0]
    }
  }

}
