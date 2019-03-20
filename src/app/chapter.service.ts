import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

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
    // return this.http.get<Chapter[]>('http://localhost:3333/c/' + id.substring(1))
    return this.http.get<Chapter[]>('../c/' + id.substring(1))
      .pipe(
        tap(_ => console.log(),
          catchError(this.handleError('getChapter', []))
        )
      )
  }

  getChapterArray(id): Observable<[]> {
    // return this.http.get<[]>('http://localhost:3333/nc/' + id)
    return this.http.get<[]>('../nc/' + id)
      .pipe(
        tap(_ => console.log(),
          catchError(this.handleError('getChapter', []))
        )
      )
  }


  getSearch(search): Observable<Search[]> {
    // return this.http.post<Search[]>('http://localhost:3333/search', {search})
    return this.http.post<Search[]>('../search', {search})
      .pipe(
        tap(_=> console.log(),
        catchError(this.handleError('search', []))
        )
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
