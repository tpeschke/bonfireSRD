import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChapterService } from '../chapter.service';
import { NotReduxService } from '../not-redux.service';

@Component({
  selector: 'app-chapter-one',
  templateUrl: './chapter-one.component.html',
  styleUrls: ['./chapter-one.component.css']
})
export class ChapterOneComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private chapterService: ChapterService,
    private notRedux: NotReduxService
  ) { }

  navDisplay = false;
  chapterName = '';
  side = { height: {'height': '3333px'}, side: [{ linkid: 'hg', body: '1. Roll Ability Scores', jump: '1h1' }, { linkid: 'hg', body: '2. Recieve CrP', jump: '1h2' }, { linkid: 'hg', body: '3. Select Race', jump: '1h3' }, { linkid: 'hg', body: '4. Choose Your Archetypes', jump: '1h4' }, { linkid: 'hg', body: '5. Record Archetype Abilities', jump: '1h5' }, { linkid: 'hg', body: '6. Roll Flaws', jump: '1h6' }, { linkid: 'hg', body: '7. Adjust Stats', jump: '1h7' }, { linkid: 'hg', body: '8. Calculate Character Vitals', jump: '1h8' }, { linkid: 'hg', body: '9. Masteries & Skills', jump: '1h9' }, { linkid: 'hg', body: '10. Define Social Characteristics', jump: '1h10' }, { linkid: 'hg', body: '11. Buy Equipment', jump: '1h11' }, { linkid: 'hg', body: '12. Transfer to Character Sheet', jump: '1h12' }]};

  ngOnInit() {
    this.navDisplay = window.document.body.clientWidth > 500 ? true : false
    this.chapterName = this.chapterService.getName(+this.route.snapshot.url[1].path);
    this.notRedux.toggleShow(true);
    this.route.params.subscribe(p => {
      this.chapterName = this.chapterService.getName(+this.route.snapshot.url[1].path)
    })
  }

  ngOnDestroy() {
    this.navDisplay = false;
    this.notRedux.toggleShow(false);
    this.chapterName = ''
  }

  displayTables() {
    this.navDisplay = !this.navDisplay
  }

}
