import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

class Chapter {
  chapter: string
  images: string
}

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
  ) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error)
      console.log(`${operation} failed: ${error}`)
      return of(result as T)
    }
  }

  getChapter(id): Observable<Chapter[]> {
    return this.http.get<Chapter[]>('http://localhost:3333/c/' + id.substring(1))
    // return this.http.get<Chapter[]>('../c/' + id.substring(1))
      .pipe(
        tap(_ => console.log(),
          catchError(this.handleError('getChapter', []))
        )
      )
  }

  getSearch(search): Observable<Search[]> {
    return this.http.post<Search[]>('http://localhost:3333/search', {search})
    // return this.http.post<Search[]>('../search', {search})
      .pipe(
        tap(_=> console.log(),
        catchError(this.handleError('search', []))
        )
      )
  }

}
