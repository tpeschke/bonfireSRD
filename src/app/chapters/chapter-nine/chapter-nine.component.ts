import { Component, OnInit } from '@angular/core';
import { NotReduxService } from '../../not-redux.service';
import { ChapterService } from '../../chapter.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chapter-nine',
  templateUrl: './chapter-nine.component.html',
  styleUrls: ['./chapter-nine.component.css']
})
export class ChapterNineComponent implements OnInit {

  constructor(
    private notRedux: NotReduxService,
    private router: Router,
    private chapterService: ChapterService
  ) { }

  navDisplay = false;
  chapterName = '';
  trait = '';
  side = { height: {'height': '6650px'}, side: [{linkid: 'hnu', body: 'GOALS', jump: '9hXrEuwuawsw'}, {linkid: 'hnu', body: 'TRAITS', jump: '9hABmHwzkjiK'}, {linkid: 'hnu', body: 'PASSIONS', jump: '9hsjmKniFwet'}, {linkid: 'hnu', body: 'DEVOTIONS', jump: '9hNSnSqzNZCw'}, {linkid: 'hnu', body: 'FLAWS', jump: '9CTZClZEJGl'}, {linkid: 'hnu', body: 'WHEN TO USE THESE RULES', jump: '9hMasFAjKGNj'}, {linkid: 'h', body: 'STARTING the CONFLICT', jump: '9houGdbEWDtK'}, {linkid: 'hg', body: 'LEVERAGE', jump: '9hgaknurtyPbT'}, {linkid: 'h', body: 'PLAYING OUT the CONFLICT', jump: '9hxovYMMmdHK'}, {linkid: 'hg', body: 'ESCALATING A CONFLICT', jump: '9hgchWyCteYlT'}, {linkid: 'hg', body: 'ASSISTING IN A CONFLICT', jump: '9hgFaQSwEnthA'}, {linkid: 'hg', body: 'ENDING A CONFLICT', jump: '9hgxxKUCnUPps'}, {linkid: 'h', body: 'REPERCUSSIONS of a CONFLICT', jump: '9hGHmLfzEumM'}]  };

  ngOnInit() {
    this.chapterService.checkPatreon().subscribe(tier => {
      if (+tier >= 1) {
        let searchParams = this.router.url.split('=')[1]
        if (searchParams) {
          this.router.navigate(['/chapter/9/advanced'], { queryParams: { search: searchParams }})
        } else {
          this.router.navigate(['/chapter/9/advanced'])
        }
      }
    })
    this.navDisplay = window.document.body.clientWidth > 650 ? true : false
    this.notRedux.toggleShow(true);
  }

  displayTables() {
    this.navDisplay = !this.navDisplay
  }

  getTrait() {
    this.chapterService.getTrait()
      .subscribe(res => this.trait = res[0].trait)
  }

}
