import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../interfaces/IProduct';
import { IDataProducts } from '../interfaces/IDataProducts';
import { IProductShow } from '../interfaces/IProductShow';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient,
    private activatedRoute:ActivatedRoute) { }

  public products:IProductShow[] = [];

  public countElementsInRow:number = 4;

  public numPage:number = 1;

  public buttons:number[] = [];

  public URL:string = "http://tekstil-rivne.com.ua";

  public apiGetProducts ():Observable<IDataProducts>{
    return this.http.get<IDataProducts>(this.URL+'/Product/GetProducts?numPage='+this.numPage+'&idgroup=2&country=&material=&brend=&typeCloth=&filler=&special=')
  }

  public getProducts(numPage:number){
    this.numPage = numPage;
    this.buttons = [];
    this.products = [];
     this.apiGetProducts().subscribe(res => {
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
