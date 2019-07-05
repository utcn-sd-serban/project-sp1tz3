import { Component, OnInit, Input, NgModule } from '@angular/core';
import { Product } from '../product';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { FormGroup, FormControl } from '@angular/forms';
import { CategoryService } from '../category.service';
import { SupplierService } from '../supplier.service';
import { Category } from '../category';
import { Supplier } from '../supplier';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Input() product: Product

  productForm: FormGroup;
  categories: Category[];
  suppliers: Supplier[];
  

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private categoryService: CategoryService,
    private supplierService: SupplierService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getProduct();
    this.getCategories();
    this.getSuppliers();
    
    this.productForm = new FormGroup({
      name: new FormControl(''),
      description: new FormControl(''),
      price: new FormControl(''),
      weight: new FormControl(''),
      category: new FormControl(''),
      supplier: new FormControl(''),
      imageUrl: new FormControl('')
    });

  }

  getProduct(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(id)
      .subscribe(product => this.product = product);
  }

  goBack(): void{
    this.location.back();
  }

  save(): void{
    this.product.name=this.productForm.value.name;
    this.product.description=this.productForm.value.description;
    this.product.price=this.productForm.value.price;
    this.product.weight=this.productForm.value.weight;
    this.product.category=this.productForm.value.category;
    this.product.supplier=this.productForm.value.supplier;
    this.product.imageUrl=this.productForm.value.imageUrl;

    if(this.validate() == true){
      this.productService.updateProduct(this.product)
      .subscribe(() => this.goBack())
    }
  }

  validate(): boolean{
      var valid = true;
      if(this.productForm.value.name.length<1||this.productForm.value.name.length>32)
        valid = false;
      if(this.productForm.value.description.length>64)
        valid = false;
      if(this.productForm.value.price<1||this.productForm.value.price>99999)
        valid = false;
      if(this.productForm.value.weight<1||this.productForm.value.weight>3000)
        valid = false;
      if(this.productForm.value.category<1||this.productForm.value.category>3)
        valid = false;
      if(this.productForm.value.supplier<1||this.productForm.value.supplier>3)
        valid = false;
      return valid;
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
