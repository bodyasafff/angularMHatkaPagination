import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../interfaces/IProduct';
import { IDataProducts } from '../interfaces/IDataProducts';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }

  public URL:string = "http://tekstil-rivne.com.ua";

  private dataProducts:IDataProducts;

  public apiGetProducts ():Observable<IDataProducts>{
    return this.http.get<IDataProducts>(this.URL+'/Product/GetProducts?numPage=1&idgroup=2&country=&material=&brend=&typeCloth=&filler=&special=');
  }

}
