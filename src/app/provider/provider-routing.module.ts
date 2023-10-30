import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProviderComponent } from './provider/provider.component';
import { ProductsComponent } from '../product/products/products.component';

const routes: Routes = [
  {path:"",component:ProviderComponent},
  {path:"products",component:ProductsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderRoutingModule { }
