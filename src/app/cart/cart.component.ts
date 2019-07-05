import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { ProductsQuantities } from '../products-quantities';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  allProducts: Product[];

  constructor(private cartService: CartService, private productService: ProductService) { }

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts(){
    this.productService.getProducts().subscribe(
      products=> {
        this.allProducts = products;
      }
    )
  }

  addProduct(productId: number){
    this.cartService.add(productId);
  }

  removeProduct(productId: number){
    this.cartService.remove(productId);
  }

  increment(productId: number){
    this.cartService.incrementQuantity(productId);
  }

  decrement(productId: number){
    this.cartService.decrementQuantity(productId);
  }

  placeOrder(){
    this.cartService.placeOrder();
  }

  emptyCart(){
    this.cartService.emptyCart();
  }
  
}
