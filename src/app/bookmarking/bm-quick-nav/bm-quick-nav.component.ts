import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChapterService } from '../../chapter.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-bm-quick-nav',
  templateUrl: './bm-quick-nav.component.html',
  styleUrls: ['./bm-quick-nav.component.css']
})
export class BmQuickNavComponent implements OnInit {

  constructor(
    private chapterService: ChapterService,
    public router: Router,
    private toastr: ToastrService
    ) { }
    
    private bookmarkArray: boolean | any[]
    
  ngOnInit() {
    this.bookmarkArray = false
    this.chapterService.getBookmarks().subscribe(result => this.bookmarkArray = result)
  }

  goToLink(route, chapter) {
    this.router.navigate([`/chapter/${chapter}`], { queryParams: { search: route } })
  }

  deleteBookmark(event, id) {
    event.stopPropagation();
    this.chapterService.deleteBookmark(id).subscribe(result => this.bookmarkArray = result)
  }

  openHelp() {
    this.toastr.info('', ' ', {enableHtml: true, disableTimeOut: true, closeButton: true})
  }

}
