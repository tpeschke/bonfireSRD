import { Component, OnInit } from '@angular/core';
import { NotReduxService } from '../../../not-redux.service';
import { Router } from '@angular/router';
import { ChapterService } from '../../../chapter.service'

@Component({
  selector: 'app-chapter-six-advanced',
  templateUrl: './chapter-six-advanced.component.html',
  styleUrls: ['./chapter-six-advanced.component.css']
})
export class ChapterSixAdvancedComponent implements OnInit {

  constructor(
        private router: Router,
    private chapterService: ChapterService
  ) { }

  chapterName = '';
  side =[{linkid: 'h', body: 'STRESS', jump: '6heEYhImWZRu'}, {linkid: 'hg', body: 'STRESS PENALTIES', jump: '6pxXlsMGLnB'}, {linkid: 'hg', body: 'HEALING STRESS', jump: '6dVqqGeiPhR'}, {linkid: 'hg', body: 'MENTAL BREAKDOWNS', jump: '8cvTzNxbyhv'}, {linkid: 'h', body: 'VITALITY', jump: '6hscFsXKKFIO'}, {linkid: 'hg', body: 'DROPPING A VITALITY CATEGORY & ENCUMBRANCE', jump: '6TgtqEMxhsi'}, {linkid: 'hg', body: 'TAKING A BREATHER', jump: 'takeabreatherfjiojioxsa'}, {linkid: 'hg', body: 'HEALING', jump: '6hgsDsSgINrBx'}, {linkid: 'h', body: 'HONOR', jump: '6hPwGysmEcvV'}, {linkid: 'hg', body: 'BONUS CrP', jump: '6hgNCVSVWFXeu'}, {linkid: 'hg', body: 'STARTING HONOR', jump: '6hgbvTTNJDlHZ'}, {linkid: 'hg', body: 'HONOR CATEGORIES & BONUSES', jump: '6hgDyUyoZBWAw'}, {linkid: 'hg', body: 'END OF SESSION HONOR AWARDS', jump: '6hgmskMjEXzPU'}, {linkid: 'h', body: 'FAME', jump: '6khdVfMTjDX'}, {linkid: 'hg', body: 'GAINING & LOSING FAME', jump: '6hgoGqxwxcBtQ'}, {linkid: 'hg', body: 'FAME & HONOR', jump: '6hgkLmpnpLtOJ'}, {linkid: 'hg', body: 'ATTRACTING NPCS', jump: '6bgprJtyLnW'}]

  ngOnInit(){}

  ngOnDestroy() {
     
    this.chapterName = ''
  }

   

}
