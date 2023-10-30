import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AddUserComponent } from './add-user/add-user.component';

const routes: Routes = [
  {path:"",component:UserComponent},
  {path:"user-details/:id",component:UserDetailsComponent},
  {path:"editUser/:id",component:EditUserComponent},
  {path:"addUser",component:AddUserComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
