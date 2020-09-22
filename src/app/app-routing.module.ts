import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonListComponent } from './button-list/button-list.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {path:':numPage',component:ButtonListComponent},
  {path:'',component:ButtonListComponent},
  {path:'dad',component:ProductListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
