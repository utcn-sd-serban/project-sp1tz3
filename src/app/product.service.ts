import { Injectable } from '@angular/core';
import { Product } from './product';
import { Observable, of} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private http: HttpClient) { }

  private productsURL = 'http://localhost:8080/products';

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.productsURL)
    .pipe(
      catchError(this.handleError<Product[]>('getProducts', []))
    );
  }

  getProduct(id: number): Observable<Product>{
    const url = `${this.productsURL}/${id}`;
    return this.http.get<Product>(url).pipe(
      catchError(this.handleError<Product>('getProduct id=${id}'))
    )
  }

  updateProduct(product: Product): Observable<any>{
    return this.http.put(this.productsURL, product, httpOptions)
      .pipe(
        catchError(this.handleError<any>('updateProduct'))
      )
  }

  addProduct(product: Product): Observable<Product>{
    return this.http.post<Product>(this.productsURL, product, httpOptions)
      .pipe(
        catchError(this.handleError<Product>('addProduct'))
      )
  }

  deleteProduct(product:Product|number): Observable<Product>{
    const id = typeof product ==='number'?product : product.id;
    const url = `${this.productsURL}/${id}`;

    return this.http.delete<Product>(url, httpOptions)
      .pipe(
        catchError(this.handleError<Product>('deleteProduct'))
      )
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      console.error(error);
   
      return of(result as T);
    };
  }

}
