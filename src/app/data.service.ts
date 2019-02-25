import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable()
export class DataService {

  constructor(private http: HttpClient,) {

   }

   private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  private handleErrorObservable(error: Response | any){
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }

  getUsers(): Observable<any> {
    return this.http.get("http://jsonplaceholder.typicode.com/users").pipe(
      map(this.extractData),
      catchError((err) => this.handleErrorObservable(err)));
  }
   getPosts(): Observable<any> {
    return this.http.get("http://jsonplaceholder.typicode.com/posts").pipe(
      map(this.extractData),
      catchError((err) => this.handleErrorObservable(err)));
  }
  
  getComments(): Observable<any> {
    return this.http.get("http://jsonplaceholder.typicode.com/comments").pipe(
      map(this.extractData),
      catchError((err) => this.handleErrorObservable(err)));
  }
}
