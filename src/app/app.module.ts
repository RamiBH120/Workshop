import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ListItemsComponent } from './list-items/list-items.component';
import { FormsModule } from '@angular/forms';
import { MyDirectiveDirective } from './my-directive.directive';
import { HomeComponent } from './home/home.component';
import { MainInvoiceComponent } from './atelier/main-invoice/main-invoice.component';
import { InvoiceComponent } from './atelier/invoice/invoice.component';
import { InvoiceListComponent } from './atelier/invoice-list/invoice-list.component';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProviderModule } from './provider/provider.module';
import { HttpClientModule} from '@angular/common/http';


@NgModule({
  //composants
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListItemsComponent,
    MyDirectiveDirective,
    HomeComponent,
    MainInvoiceComponent,
    InvoiceComponent,
    InvoiceListComponent,
    NotFoundComponent,
  ],
  //bibliothéques
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    UserModule,
    ProductModule,
    ProviderModule,
    HttpClientModule
  ],
  //services
  providers: [],
  //composants de départ
  //il doivent être déclaré dans index.html
  bootstrap: [AppComponent]
})
export class AppModule { }
