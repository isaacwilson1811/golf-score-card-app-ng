import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

interface API_Obj {courses: any[], data: any[]};

export interface GolfCourse {
  name:string,
  id:string,
  image:string
}

@Injectable({
  providedIn: 'root'
})
export class GolfCourseDataService {

  private API_URL: string = 'https://golf-courses-api.herokuapp.com/courses';
  private defaultData: object = {data: 'an error was caught, data stream was replaced with this object' };

  constructor(private http: HttpClient) { }

  fetchGolfCourses(): Observable<GolfCourse[]> {
    return this.http.get<API_Obj>(this.API_URL)
      .pipe(
        map(_=>_.courses),
        catchError(this.handleError<any>('fetchAllData', this.defaultData))
      );
  }

  fetchCourseDetails(id:string): Observable<any> {
    const url = `${this.API_URL}/${id}`;
    return this.http.get<API_Obj>(url)
    .pipe(
      map(_=>_.data),
      // tap(() => console.log(`fetching data by id: ${id}`)),
      catchError(this.handleError<any>(`fetchDataById: ${url}`, this.defaultData))
    )
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // console.error(error);
      return of(result as T);
    };
  }

}
