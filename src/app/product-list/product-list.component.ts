import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

  constructor(private http: HttpClient,
    private productService: ProductService,
    private activatedRoute: ActivatedRoute ){}

  public getProductService():ProductService{
    return this.productService;
  }

  ngOnInit(): void {
    // console.log(this.activatedRoute.snapshot.paramMap.get("numPage"));  
    // this.productService.getProducts();
  }
}
