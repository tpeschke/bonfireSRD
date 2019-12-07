import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import local from '../local';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdvGuardService implements CanActivate {

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
        if (result >= 1) {
          return true
        }
        this.router.navigate([state.url.split('/advanced')[0]])
        return false
      })
    )
  }
}
