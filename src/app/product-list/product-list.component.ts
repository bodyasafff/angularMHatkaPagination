import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

import { ProductService } from '../services/product.service';
import { IProductShow } from '../interfaces/IProductShow';
import { IProduct } from '../interfaces/IProduct'


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

  public countElementsInRow:number = 4;

  public buttons:number[] = [];

  constructor(private http: HttpClient,
    private productService: ProductService,
    private activatedRoute: ActivatedRoute ){}

  public products:IProductShow[] = [];

  public getProductService():ProductService{
    return this.productService;
  }

  public changePage(btn:number){
    this.productService.numPage = btn;
    this.GetProducts();
  }

  ngOnInit(): void {
    let numPage:number  = Number(this.activatedRoute.snapshot.paramMap.get("numPage"));
    numPage < 1 ? numPage = 1 : null;
    this.productService.numPage = numPage; 
    this.GetProducts();
  }

  public GetProducts(){
    this.productService.GetProducts().subscribe(res =>  {
      this.products = [];
      this.buttons = [];
      let line:IProduct[] = [];
      for(let i = 0;i < res.products.length;i += this.countElementsInRow){
        for(let j = i;j < i + this.countElementsInRow;j++){
            line.push(res.products[j]);
        }
        this.products.push({products:line});
          line = [];  
        }
    
        let countPages:number =  Math.ceil(res.countProducts / 20);
        for(let i = 1;i < countPages + 1;i++){
          this.buttons.push(i);
        }
    });
  }

}
