import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

class Chapter {
  chapter: string
  images: string
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
    return this.http.get<Chapter[]>('http://localhost:3333/chapter/' + id)
      .pipe(
        tap(_=> console.log('')),
        catchError(this.handleError('getChapter', []))
      )
  }
}
