import { Component, OnInit } from '@angular/core';
import { NotReduxService } from '../../not-redux.service';

@Component({
  selector: 'app-chapter-fourteen',
  templateUrl: './chapter-fourteen.component.html',
  styleUrls: ['./chapter-fourteen.component.css']
})
export class ChapterFourteenComponent implements OnInit {

  constructor(
    private notRedux: NotReduxService
  ) { }

  chapterName = '';
  side =[{linkid: 'hnu', body: 'GAINING EXPERIENCE', jump: '14hzdDOqjnAgZ'}, {linkid: 'h', body: 'LEVELING UP', jump: '14hZqkalOSwRr'}, {linkid: 'hg', body: 'DAY 1: RECEIVE CrP', jump: '14hghilHrGsooj'}, {linkid: 'hg', body: 'DAY 2: INCREASE ABILITY SCORES', jump: '14hgNgyrqXbebx'}, {linkid: 'hg', body: 'DAY 3: ASSESS PERSONALITY ', jump: '14hgtAZiWwZJoy'}, {linkid: 'hg', body: 'DAY 4: INCREASE CLASS ABILITIES', jump: '14hgePIgBrVjYz'}, {linkid: 'hg', body: 'DAY 5: TRAIN AND RETRAIN SKILLS & MASTERIES ', jump: '14hgbtjUfRlAsf'}, {linkid: 'hg', body: 'DAY 6: INCREASE VITALITY', jump: '14hgBavRZYfJAF'}, {linkid: 'hg', body: 'DAY 7: RECEIVE HONOR', jump: '14hgitOLfeiEUO'}]

  ngOnInit(){}

  ngOnDestroy() {
    this.chapterName = ''
  }

   

}
