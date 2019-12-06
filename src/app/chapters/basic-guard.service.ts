import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import local from '../local';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BasicGuardService {

  constructor(
    private http: HttpClient,
    private router: Router
    ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.http.get(local.endpointBase + '/checkPatreon').pipe(
      map(result => {
        if (result === 0 || !result) {
          return true
        }
        let searchParams = state.url.split('?')
        if (searchParams[1]) {
          this.router.navigate([searchParams[0] + '/advanced'], {queryParams: {search: searchParams[1].split('=')[1]}})
        } else {
          this.router.navigate([state.url + '/advanced'])
        }
        return false
      })
    )
  }
}
