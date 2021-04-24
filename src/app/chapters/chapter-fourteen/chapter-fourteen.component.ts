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
  side =[{linkid: 'hnu', body: 'Gaining Experience', jump: '14hzdDOqjnAgZ'}, {linkid: 'h', body: 'Leveling Up', jump: '14hZqkalOSwRr'}, {linkid: 'hg', body: 'SPECIALISTS & TOTAL LEVEL', jump: 'SPECIALISTLEVheader'}, {linkid: 'hg', body: 'DAY 1: RECEIVE CRP', jump: '14hghilHrGsooj'}, {linkid: 'hg', body: 'DAY 2: INCREASE STAT SCORES', jump: '14hgNgyrqXbebx'}, {linkid: 'hg', body: 'DAY 3: ASSESS PERSONALITY ', jump: '14hgtAZiWwZJoy'}, {linkid: 'hg', body: 'DAY 4: INCREASE ARCHETYPE ABILITIES', jump: '14hgePIgBrVjYz'}, {linkid: 'hg', body: 'DAY 5: TRAIN AND RETRAIN SKILLS & TRAININGS ', jump: '14hgbtjUfRlAsf'}, {linkid: 'hg', body: 'DAY 6: INCREASE VITALITY & STRESS THRESHOLD', jump: '14hgBavRZYfJAF'}, {linkid: 'hg', body: 'DAY 7: ADJUST HONOR & REPUTATION', jump: '14hgitOLfeiEUO'},  {linkid: 'h', body: 'Attracting NPCs', jump: 'ATTRACTINGNPCuydmDjGgOm'}]

  ngOnInit(){}

  ngOnDestroy() {
    this.chapterName = ''
  }

   

}
