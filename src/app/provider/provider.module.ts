import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderRoutingModule } from './provider-routing.module';
import { ProviderComponent } from './provider/provider.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProviderComponent
  ],
  imports: [
    CommonModule,
    ProviderRoutingModule,
    FormsModule
  ]
})
export class ProviderModule { }
