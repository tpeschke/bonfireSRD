import { Component, OnInit } from '@angular/core';
import { NotReduxService } from '../../../not-redux.service';
import { Router } from '@angular/router';
import { ChapterService } from '../../../chapter.service'

@Component({
  selector: 'app-chapter-six-advanced',
  templateUrl: './chapter-six-advanced.component.html',
  styleUrls: ['../chapter-six.component.css']
})
export class ChapterSixAdvancedComponent implements OnInit {

  constructor(
        private router: Router,
    private chapterService: ChapterService
  ) { }

  chapterName = '';
  side =[{linkid: 'h', body: 'Stress', jump: '6heEYhImWZRu'}, {linkid: 'hg', body: 'STRESS PENALTIES', jump: '6pxXlsMGLnB'}, {linkid: 'hg', body: 'HEALING STRESS', jump: '6dVqqGeiPhR'}, {linkid: 'hg', body: 'MENTAL BREAKDOWNS', jump: '8cvTzNxbyhv'}, {linkid: 'h', body: 'Vitality', jump: '6hscFsXKKFIO'}, {linkid: 'hg', body: 'DROPPING A VITALITY CATEGORY & ENCUMBRANCE', jump: '6TgtqEMxhsi'}, {linkid: 'hg', body: 'TAKING A BREATHER', jump: '6fBkkDHLbRn'}, {linkid: 'hg', body: 'HEALING', jump: '6hgsDsSgINrBx'}, {linkid: 'h', body: 'Honor', jump: '6hPwGysmEcvV'}, {linkid: 'hg', body: 'BONUS CRP', jump: '6hgNCVSVWFXeu'}, {linkid: 'hg', body: 'STARTING HONOR', jump: '6hgbvTTNJDlHZ'}, {linkid: 'hg', body: 'HONOR CATEGORIES & BONUSES', jump: '6hgDyUyoZBWAw'}, {linkid: 'hg', body: 'END OF SESSION HONOR AWARDS', jump: '6hgmskMjEXzPU'}]

  ngOnInit(){}

  ngOnDestroy() {
     
    this.chapterName = ''
  }

   

}
