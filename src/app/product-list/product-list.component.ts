import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../services/product.service';




@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

  constructor(private http: HttpClient,private productService: ProductService) { }

  public getProductService():ProductService{
    return this.productService;
  }

  public getProducts(){
    this.productService.getProducts();
    this.productService.products;
  }

  ngOnInit(): void {
    this.getProducts();
  }
}
