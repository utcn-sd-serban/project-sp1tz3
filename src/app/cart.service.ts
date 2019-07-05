import { Injectable } from '@angular/core';
import { ProductsQuantities } from './products-quantities';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Product } from './product';
import { OrderForPost } from './order-for-post';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = new ProductsQuantities([],[]);
  orderUrl = 'http://localhost:8080/orders';

  constructor(private http: HttpClient){}

  getCart(): Observable<ProductsQuantities>{
    return of(this.cart);
  }

  add(productId: number): Observable<ProductsQuantities>{
    if(this.cart.products.indexOf(productId) === -1){
      this.cart.products.push(productId);
      this.cart.quantities.push(1);
      return of(this.cart);
    }
  }
  
  remove(productId: number): Observable<ProductsQuantities>{
    let index = this.cart.products.indexOf(productId);
    this.cart.quantities.splice(index,1);
    this.cart.products.splice(index, 1);
    return of(this.cart);
  }

  incrementQuantity(productId: number){
    this.cart.incrementQuantity(productId);
  }

  decrementQuantity(productId: number){
    if(this.cart.quantities[this.cart.products.indexOf(productId)]===1){
      this.remove(productId);
    }
    else{
      this.cart.decrementQuantity(productId);
    }
  }

  placeOrder() {
    let tempDate = new Date();
    let deliveryAddressId = 3;
    let productsQuantitiesDTO = new ProductsQuantities(this.cart.products, this.cart.quantities);
    let order = new OrderForPost(tempDate.toISOString(), deliveryAddressId, productsQuantitiesDTO);
    this.http.post(this.orderUrl, order, httpOptions).subscribe();
  }

  emptyCart(){
    this.cart.products = [];
    this.cart.quantities = [];
  }

}
