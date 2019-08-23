import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChapterService } from '../../chapter.service';

@Component({
  selector: 'app-bm-quick-nav',
  templateUrl: './bm-quick-nav.component.html',
  styleUrls: ['./bm-quick-nav.component.css']
})
export class BmQuickNavComponent implements OnInit {

  constructor(
    private chapterService: ChapterService,
    public router: Router,
    ) { }
    
    private bookmarkArray: boolean | any[]
    
  ngOnInit() {
    this.bookmarkArray = false
    this.chapterService.getBookmarks().subscribe(result => this.bookmarkArray = result)
  }

  goToLink(route, chapter) {
    this.router.navigate([`/chapter/${chapter}`], { queryParams: { search: route } })
  }

}
