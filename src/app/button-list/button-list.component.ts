import { Component, OnInit, Output } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-button-list',
  templateUrl: './button-list.component.html',
  styleUrls: ['./button-list.component.css']
})
export class ButtonListComponent implements OnInit {

  constructor(private productService:ProductService,
    private activatedRoute:ActivatedRoute) { }

  public changePage(button:number){
    if(this.productService.numPage !== button){
    this.productService.numPage = button;
    this.productService.getProducts(button);
    }
  }

  public getProductService():ProductService{
    return this.productService;
  }

  ngOnInit(): void {
    let numpage:number = Number(this.activatedRoute.snapshot.paramMap.get("numPage"));
    numpage < 1 ? numpage = 1 : null;
    this.productService.getProducts(numpage);
  }
}