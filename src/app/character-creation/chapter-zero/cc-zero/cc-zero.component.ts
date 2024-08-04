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

  side = [{linkid: 'h', body: 'Introduction', jump: 'Introductionheader'}, {linkid: 'h', body: 'Leveling Terminology', jump: 'levelingterminog'}, {linkid: 'h', body: 'Classes', jump: 'GeneralistArcmajorheader'}, {linkid: 'hg', body: 'Expert', jump: 'EXPERTheader'}, {linkid: 'hg', body: 'Fighter', jump: 'FIGHTERheader'}, {linkid: 'hg', body: 'Servant', jump: 'SERVANTheader'}, {linkid: 'hg', body: 'Socialite', jump: 'SOCIALITEheader'}, {linkid: 'hg', body: 'Weird-Adept', jump: 'WeirdAdeptheader'}]

  ngOnInit() {
    
  }

}
