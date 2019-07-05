import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Category } from './category';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  private categoryUrl = "http://localhost:8080/categories"

  getCategories(): Observable<Category[]>{
    return this.http.get<Category[]>(this.categoryUrl)
    .pipe(
      catchError(this.handleError<Category[]>('getCategories', []))
    )
  }
  
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      console.error(error);
   
      return of(result as T);
    };
  }


}
