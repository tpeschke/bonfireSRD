import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { ChapterService } from '../chapter.service'

@Injectable({
  providedIn: 'root'
})
export class AdvGuardService implements CanActivate {

  constructor(
    private router: Router,
    private chapterService: ChapterService
  ) { }

  canActivate(): boolean {
    console.log(this.router.url)
    return this.checkIfAdv()
  }

  checkIfAdv() {
    console.log(this.chapterService.patreon)
    if (+this.chapterService.patreon >= 1) {
      let searchParams = this.router.url.split('=')[1]
        if (searchParams) {
          this.router.navigate(['chapter/8/advanced'], { queryParams: { search: searchParams }})
        } else {
          this.router.navigate(['chapter/8/advanced'])
        }
        return false
      } else {
        return true
    }
  }

}
