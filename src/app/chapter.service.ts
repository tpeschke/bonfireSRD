import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import local from './local';

import { ToastrService } from 'ngx-toastr';

class Search {
  chapname: string
  chapnum: number
}

@Injectable({
  providedIn: 'root'
})

export class ChapterService {

  constructor(
    private http: HttpClient,
    private toastr: ToastrService
  ) {}

  public login: boolean | string = false
  public patreon = null;

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      if (error.status === 200) {
        this.toastr.success('', `${error.error.text}`);
      } else if (error.status === 403) {
        this.toastr.warning('', `${error.error}`)
      } else if (error.status === 401) {
        this.toastr.error('', `${error.error}`);
      }
      return of(result as T)
    }
  }

  

  getSearch(search: string): Observable<Search[]> {
    return this.http.post<Search[]>(local.endpointBase + '/search', { search })
      .pipe(
        catchError(this.handleError('search', []))
      )
  }

  checkLogin(): any {
    return this.http.get(local.endpointBase + '/checkLogin')
      .pipe(
        tap(value => this.login = !!value),
        catchError(this.handleError('logon', []))
      )
  }

  checkPatreon(): any {
    return this.http.get(local.endpointBase + '/checkPatreon')
      .pipe(
        tap(value => this.patreon = value),
        catchError(this.handleError('patreon', []))
      )
  }

  updatePatreon(code): any {
    return this.http.post(local.endpointBase + '/linkPatreon', { code })
      .pipe(
        catchError(this.handleError('patreon update', []))
      )
  }

  getBookmarks(): Observable<any> {
    return this.http.get<any[]>(local.endpointBase + '/bm')
      .pipe(
        catchError(this.handleError('getBookmarks', []))
      )
  }

  addBookmark(code): any {
    return this.http.post(local.endpointBase + '/abm', { code })
      .pipe(
        tap(e => console.log(e)),
        catchError(this.handleError('add bookmark', []))
      )
  }

  deleteBookmark(code): any {
    return this.http.delete(local.endpointBase + '/dbm/' + code)
      .pipe(
        catchError(this.handleError('delete bookmark', []))
      )
  }

  getTrait(): any {
    return this.http.get(local.endpointBase + '/trait')
      .pipe(
        catchError(this.handleError('get trait', []))
      )
  }

  getName(id: number): string {
    switch (id) {
      case 1:
        return 'Character Creation';
      case 2:
        return 'Ability Scores';
      case 3:
        return 'Races';
      case 4:
        return 'Archetypes';
      case 5:
        return 'Flaws';
      case 6:
        return 'Character Vitals';
      case 7:
        return 'Masteries';
      case 8:
        return 'Skills';
      case 9:
        return 'Social';
      case 10:
        return 'Combat';
      case 11:
        return 'Equipment';
      case 12:
        return 'Magic';
      case 13:
        return 'Divine';
      case 14:
        return 'Character Progression';
      case 15:
        return 'Misc Rules';
      default:
        return 'Home';
    }
  }

}
