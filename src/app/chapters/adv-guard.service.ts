import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import local from '../local';
import { map } from 'rxjs/operators';
import { ChapterService } from '../chapter.service';

@Injectable({
  providedIn: 'root'
})
export class AdvGuardService implements CanActivate {

  constructor(
    private http: HttpClient,
    private router: Router,
    private chapterService: ChapterService
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.chapterService.patreon) {
      return this.canView(this.chapterService.patreon, state)
    } else {
      return this.http.get(local.endpointBase + '/checkPatreon').pipe(
        map(result => {
          return this.canView(result, state)
        })
      )
    }
  }

  canView (patreon, state) {
    console.log(patreon, patreon > 0)
    if (patreon > 0) {
      return true
    }
    let searchParams = state.url.split('?')
    if (searchParams[1]) {
      this.router.navigate([searchParams[0]], {queryParams: {search: searchParams[1].split('=')[1]}})
    } else {
      this.router.navigate([state.url])
    }
    return false
  }
}
