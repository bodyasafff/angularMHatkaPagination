import { Component, OnInit, Output } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-button-list',
  templateUrl: './button-list.component.html',
  styleUrls: ['./button-list.component.css']
})
export class ButtonListComponent implements OnInit {

  constructor(private productService:ProductService) { }

  public changePage(button){
    if(this.productService.numPage !== button){
    this.productService.numPage = button;
    this.productService.getProducts();
    }
  }

  public getProductService():ProductService{
    return this.productService;
  }

  ngOnInit(): void {  
  }
}
