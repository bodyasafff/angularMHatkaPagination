import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { ProductService } from '../services/product.service';
import { ICategory } from '../interfaces/ICategory';
import { ICategoryMap } from '../interfaces/ICategoryMap';
import { IChildCategory } from '../interfaces/IChildCategory';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class CategoryService {

  public nameCategory:string;

  constructor(private http:HttpClient,
    private productService:ProductService) { }

  public getApiCategories():Observable<any>{
    return this.http.get<ICategoryMap[]>(this.productService.URL+'/Product/GetMenu').pipe(map(data => {
      return data.map(w=>{
        return { 
          id: w.Id,
          name: w.Name,
          selected: false,
          childCategories: w.Groups.map(e =>{ 
            return { 
              id:e.Id,
              name:e.Name 
            } 
          })}
      })
    }))
  }

  // public mapper(mapCategories:ICategoryMap[]):ICategory[]{
  //   let categories:ICategory[] = [];
  //   for(let i = 0;i < mapCategories.length;i++){

  //     let childCategories:IChildCategory[] = [];

  //     for(let j = 0;j < mapCategories[i].Groups.length;j++){
  //       let childCategory:IChildCategory={
  //         id:mapCategories[i].Groups[j].Id,
  //         name:mapCategories[i].Groups[j].Name
  //       };
  //       childCategories.push(childCategory);
  //     }

  //     let category:ICategory = {
  //       id:mapCategories[i].Id,
  //       name:mapCategories[i].Name,
  //       childCategories:childCategories
  //     };

  //     categories.push(category);
  //   }
  //   return categories;
  // }

}
