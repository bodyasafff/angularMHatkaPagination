import { Component, OnInit } from '@angular/core';
import { ICategory } from '../interfaces/ICategory';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent implements OnInit {

  constructor(private categoryService:CategoryService) { }

  public categories:ICategory[];

  public getCategories():void{
    this.categoryService.getApiCategories().subscribe(res=>{
       this.categories = res;
       console.log(this.categories);
    })
  }

  public showChildCategories(category:ICategory){
    category.selected = !category.selected;
  }

  ngOnInit(): void {
    this.getCategories();
  }

}
