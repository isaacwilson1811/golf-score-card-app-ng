import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
// import { catchError, tap, map } from 'rxjs/operators';

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
    return this.http.get<any>(this.API_URL, this.httpOptions);
  }

  fetchDataById(id:string): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/${id}`);
  }

}
