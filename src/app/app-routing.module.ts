import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListUserComponent } from './user/list-user/list-user.component';
import { ProductsComponent } from './product/products/products.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { MainInvoiceComponent } from './atelier/main-invoice/main-invoice.component';
import { InvoiceComponent } from './atelier/invoice/invoice.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:"",redirectTo:"HomeComponent",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  /*{path:"users",component:ListUserComponent},
  {path:"editUser/:id",component:ListUserComponent},
  {path:"products",component:ProductsComponent},
  {path:"addUser",component:AddUserComponent},
  {path:"invoice",component:MainInvoiceComponent},
  {path:"invoice/:id/:active",component:InvoiceComponent},
  {path:"invoice",component:InvoiceComponent},*/
  {path:"users",loadChildren:()=> import('./user/user.module').then(m=>m.UserModule)},
  {path:"products",loadChildren:()=> import('./product/product.module').then(m=>m.ProductModule)},
  {path:"providers",loadChildren:()=> import('./provider/provider.module').then(m=>m.ProviderModule)},

  {path:"**", component:NotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
