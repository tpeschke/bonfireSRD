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
    side = [{linkid: 'hnu', body: 'STAT SCORE DAMAGE', jump: '15hbYNKwyrdVf'}, { linkid: 'hnu', body: 'DISEASES & POISONS', jump: '15hThjcdwfpAY'}, {linkid: 'hnu', body: 'FALLING DAMAGE', jump: '15hOfPmmhELBY'}, {linkid: 'hnu', body: 'ILLUMINATION', jump: '15hLzcrnSHGfR'}, {linkid: 'hnu', body: 'LONG-TERM EXHAUSTION', jump: '15hfrDRlgsYQh'}, {linkid: 'hnu', body: 'SIZING & SIZE CHARTS', jump: 'sizingandsizercharhear'}]

    ngOnInit() {
    }
  
    ngOnDestroy() {
      this.chapterName = ''
    }
  
}
