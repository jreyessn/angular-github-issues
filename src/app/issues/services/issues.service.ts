import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { IssueResponse } from '../issues.type';

@Injectable({
  providedIn: 'root'
})
export class IssuesService {

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Servicio para buscar issues
   * @param {string} term Término de busqueda
   */
  list(term: string = ''): Observable<IssueResponse> {
    return this.http.get<IssueResponse>(environment.api_github + 'search/issues?q=' + term).pipe(
      catchError((error: HttpErrorResponse) => {
          return of({
            total_count:        0,
            incomplete_results: false,
            items:              [],
          })
      })
    )
  }

}
