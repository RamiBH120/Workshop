import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user/user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { FormsModule } from '@angular/forms';
import { AccountsComponent } from './accounts/accounts.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { SliderComponent } from './slider/slider.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { UserService } from '../core/service/user.service';


@NgModule({
  declarations: [
    UserComponent,
    UserDetailsComponent,
    AccountsComponent,
    EditUserComponent,
    AddUserComponent,
    ListUserComponent,
    SliderComponent,
    UserManagementComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ],
  providers:[
    UserService
  ]
})
export class UserModule { }
