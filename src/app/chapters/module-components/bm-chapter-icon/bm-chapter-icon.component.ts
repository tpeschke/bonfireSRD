import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bm-chapter-icon',
  templateUrl: './bm-chapter-icon.component.html',
  styleUrls: ['./bm-chapter-icon.component.css']
})
export class BmChapterIconComponent implements OnInit {

  @Input() id: any

  constructor() { }

  ngOnInit() {
  }

}
