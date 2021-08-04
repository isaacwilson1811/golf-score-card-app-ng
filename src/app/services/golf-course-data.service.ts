import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GolfCourseDataService {

  API_URL: string = 'https://golf-courses-api.herokuapp.com/courses';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  fetchAllData(): Observable<any> {
    let url = this.API_URL;
    return this.http.get<any>(url, this.httpOptions)
      .pipe(
        tap(() => console.log('fetching all data')),
        catchError(this.handleError<any>('fetchAllData', []))
      )
  }

  fetchDataById(id:string): Observable<any> {
    let url = `${this.API_URL}/${id}`;
    return this.http.get<any>(url)
    .pipe(
      tap(() => console.log(`fetching data by id: ${id}`)),
      catchError(this.handleError<any>(`fetchDataById: ${url}`, []))
    )
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

}
