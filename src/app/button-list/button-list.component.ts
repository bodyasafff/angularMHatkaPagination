import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Component, OnInit, Output } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-button-list',
  templateUrl: './button-list.component.html',
  styleUrls: ['./button-list.component.css']
})
export class ButtonListComponent implements OnInit {

  constructor(private productService:ProductService) { }

  private countPages:number;

  public buttons:number[] = [];

  // public generateButtons():void{
  //   this.productService.apiGetProducts().subscribe(res =>{
  //     this.countPages = Math.ceil(res.countProducts / 20);
  //     for(let i = 1;i < this.countPages+1;i++){
  //       this.buttons.push(i);
  //     }
  //   })
  // }
  @Output() dd(){
    console.log('button: ',this.productService.products);
  }


  ngOnInit(): void {  
  
  }
}
