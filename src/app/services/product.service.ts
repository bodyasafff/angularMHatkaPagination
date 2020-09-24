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

  public numPage:number = 1;

  public URL:string = "http://tekstil-rivne.com.ua";

  public GetProducts ():Observable<IDataProducts>{
    return this.http.get<IDataProducts>(this.URL+'/Product/GetProducts?numPage='+this.numPage+'&idgroup=2&country=&material=&brend=&typeCloth=&filler=&special=')
  }
}
