import { Component, OnInit } from '@angular/core';
import { ProductsComponent } from '../products/products.component';
import { Location } from '@angular/common';
import { SupplierService } from '../supplier.service';
import { CategoryService } from '../category.service';
import { Category } from '../category';
import { Supplier } from '../supplier';
import { Product } from '../product';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {

  categories: Category[];
  suppliers: Supplier[];
  product: Product;
  
  constructor(
    private products: ProductsComponent, 
    private location: Location,
    private categoryService: CategoryService,
    private supplierService: SupplierService,) { }

  ngOnInit() {
    this.getCategories();
    this.getSuppliers();
  }

  add(name: string, description: string, price: number, weight: number, category: number, supplier: number, imageUrl: string): void{
    debugger;
    this.products.add(name, description, price, weight, category, supplier, imageUrl);
  }

  back(): void{
    this.location.back();
  }

  getCategories(){
    this.categoryService.getCategories().subscribe(
      categories => this.categories = categories 
    );
  }

  getSuppliers(){
    this.supplierService.getSuppliers().subscribe(
      suppliers => this.suppliers = suppliers
    )
  }




}
