import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  constructor(private http: HttpClient){
  }
  
  ngOnInit(){
    this.http.get('http://tekstil-rivne.com.ua/Product/GetProducts?numPage=1&idgroup=2&country=&material=&brend=&typeCloth=&filler=&special=').subscribe(res => console.log(res));
  }
}
