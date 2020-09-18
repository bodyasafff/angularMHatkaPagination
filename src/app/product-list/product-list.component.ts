import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../services/product.service';
import { IProductShow } from '../interfaces/IProductShow';




@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

  constructor(private http: HttpClient,private productService: ProductService) { }

  public prod:IProductShow[] = [];

  public getProductService():ProductService{
    return this.productService;
  }

  ngOnInit(): void {
    this.productService.getProducts();
    this.prod = this.productService.products;
  }
}
