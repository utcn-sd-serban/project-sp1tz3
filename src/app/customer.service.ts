import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Customer } from './customer';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private customerUrl= "http://localhost:8080/customers";

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<Customer[]>{
    return this.http.get<Customer[]>(this.customerUrl)
    .pipe(
      catchError(this.handleError<Customer[]>('getCustomers', []))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      console.error(error);
   
      return of(result as T);
    };
  }

}
