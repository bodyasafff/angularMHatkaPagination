import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';


import { GroupListComponent } from './group-list/group-list.component';
import { SelectorListComponent } from './selector-list/selector-list.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ButtonListComponent } from './button-list/button-list.component';

@NgModule({
  declarations: [
    AppComponent,
    GroupListComponent,
    SelectorListComponent,
    ProductListComponent,
    ButtonListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
