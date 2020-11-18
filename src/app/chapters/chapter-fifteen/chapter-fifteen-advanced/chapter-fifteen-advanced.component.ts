import { Component, OnInit } from '@angular/core';
import { ChapterService } from '../../../chapter.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chapter-fifteen-advanced',
  templateUrl: './chapter-fifteen-advanced.component.html',
  styleUrls: ['../chapter-fifteen.component.css']
})
export class ChapterFifteenAdvancedComponent implements OnInit {

    constructor(
      private router: Router,
      private chapterService: ChapterService
    ) { }
  
    navDisplay = false;
    chapterName = '';
    side = [{linkid: 'hnu', body: 'Stat Score Damage', jump: '15hbYNKwyrdVf'}, {linkid: 'hnu', body: 'Diseases & Poisons', jump: '15hThjcdwfpAY'}, {linkid: 'hnu', body: 'Falling Damage', jump: '15hOfPmmhELBY'}, {linkid: 'hnu', body: 'Illumination', jump: '15hLzcrnSHGfR'}, {linkid: 'h', body: 'Long-term Exhaustion', jump: '15hfrDRlgsYQh'}, {linkid: 'hg', body: 'SMALL & LARGE SIZED CREATURES', jump: 'smalleandrlargesizedcreaut'}, {linkid: 'h', body: 'Sizing & Size Charts', jump: 'sizingandsizercharhear'}]

    ngOnInit() {
    }
  
    ngOnDestroy() {
      this.chapterName = ''
    }
  
}
