import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { AddProductComponent } from './add-product/add-product.component';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { ListProductsComponent } from './list-products/list-products.component';


@NgModule({
  declarations: [
    AddProductComponent,
    ProductsComponent,
    ListProductsComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule
  ]
})
export class ProductModule { }
