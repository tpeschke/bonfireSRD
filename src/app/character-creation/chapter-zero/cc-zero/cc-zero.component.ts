import { Component, OnInit } from '@angular/core';
import { ChapterService } from 'src/app/chapter.service';

@Component({
  selector: 'lib-cc-zero',
  templateUrl: './cc-zero.component.html',
  styleUrls: ['./cc-zero.component.css', '../../../chapter.css']
})
export class CcZeroComponent implements OnInit {

  constructor(
    private chapterService: ChapterService,
  ) { }

  side = [{linkid: 'h', body: 'You Want To Play', jump: 'YouWanttoPlheader'}, {linkid: 'h', body: 'That The Gm Gets Excited About', jump: 'ThattheGMGeheader'}, {linkid: 'h', body: 'That The Other Players Can Interact With', jump: 'ThattheOtherheader'}, {linkid: 'h', body: 'Final Thoughts', jump: 'FinalThoughtsheader'}]

  ngOnInit() {
    
  }

}
