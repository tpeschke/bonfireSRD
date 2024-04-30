import { Component, OnInit } from '@angular/core';
import { ChapterService } from 'src/app/chapter.service';

@Component({
  selector: 'app-cc-three',
  templateUrl: './cc-three.component.html',
  styleUrls: ['./cc-three.component.css', '../../../chapter.css']
})
export class CcThreeComponent implements OnInit {

  constructor(
    private chapterService: ChapterService,
  ) { }

  side = [{linkid: 'h', body: 'Introduction', jump: 'Introductionheader'}, {linkid: 'h', body: 'Leveling Terminology', jump: 'levelingterminog'}, {linkid: 'h', body: 'Classes', jump: 'GeneralistArcmajorheader'}, {linkid: 'hg', body: 'Expert', jump: 'EXPERTheader'}, {linkid: 'hg', body: 'Fighter', jump: 'FIGHTERheader'}, {linkid: 'hg', body: 'Servant', jump: 'SERVANTheader'}, {linkid: 'hg', body: 'Socialite', jump: 'SOCIALITEheader'}, {linkid: 'hg', body: 'Weird-Adept', jump: 'WeirdAdeptheader'}]
  weirdTables = {}

  ngOnInit() {
    this.chapterService.getAllWeirdTables().subscribe(result => this.weirdTables = result)
  }
}
