import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../interfaces/IProduct';
import { IDataProducts } from '../interfaces/IDataProducts';
import { IProductShow } from '../interfaces/IProductShow';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }

  public products:IProductShow[] = [];

  private countElementsInRow:number = 4;

  public numPage:number = 1;

  public countPages:number;

  public buttons:number[] = [];

  public URL:string = "http://tekstil-rivne.com.ua";

  public apiGetProducts ():Observable<IDataProducts>{
    return this.http.get<IDataProducts>(this.URL+'/Product/GetProducts?numPage='+this.numPage+'&idgroup=2&country=&material=&brend=&typeCloth=&filler=&special=');
  }

  public getProducts(){
     this.apiGetProducts().subscribe(res => {
      let line:IProduct[] = [];
      for(let i = 0;i < res.products.length;i += this.countElementsInRow){
        for(let j = i;j < i + this.countElementsInRow;j++){
          line.push(res.products[j]);
        }
        this.products.push({products:line});
        line = [];

        this.countPages = Math.ceil(res.countProducts / 20);
        for(let i = 1;i < this.countPages+1;i++){
          this.buttons.push(i);
        }  
     }
    });
  }

}
