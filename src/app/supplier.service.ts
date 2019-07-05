import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Supplier } from './supplier';
import { catchError } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  constructor(private http: HttpClient) { }

  private supplierUrl = "http://localhost:8080/suppliers";

  getSuppliers(): Observable<Supplier[]>{
    return this.http.get<Supplier[]>(this.supplierUrl)
    .pipe(
      catchError(this.handleError<Supplier[]>('getSuppliers', []))
    )
  }
  
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      console.error(error);
   
      return of(result as T);
    };
  }
}
