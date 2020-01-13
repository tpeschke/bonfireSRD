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
    if (this.chapterService.patreon >= 1) {
      return true
    } else if (this.chapterService.patreon === 0) {
      return false
    } else {
      return this.chapterService.checkPatreon().subscribe();
    }
  }
}
