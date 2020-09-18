import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IDataProducts } from '../interfaces/IDataProducts';
import { ProductService } from '../services/product.service';
import { map } from 'rxjs/operators'
import { from } from 'rxjs';
import { IProductShow } from '../interfaces/IProductShow';
import { IProduct } from '../interfaces/IProduct';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private http: HttpClient,private productService: ProductService) { }

  public countElementsInRow:number = 4;

  public prod:IProductShow[] = [];

  public getProductService():ProductService{
    return this.productService;
  }

  private sortProducts():void{
    this.productService.apiGetProducts().subscribe(res => {
      let line:IProduct[] = [];
      for(let i = 0;i < res.products.length;i += this.countElementsInRow){
        for(let j = i;j < i + this.countElementsInRow;j++){
          line.push(res.products[j]);
        }
        this.prod.push({products:line});
        line = [];
      }
    });
  }
  
  ngOnInit(): void {
    this.sortProducts();
  }
}
