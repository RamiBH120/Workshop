import { Component, OnInit } from '@angular/core';

import { User } from '../../models/user';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/service/user.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css'],
})
export class UserManagementComponent implements OnInit {
  
  filter!:string;

  list:User[]=[];

  constructor(private router:Router, private userService:UserService){

  }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(value=>{
      this.list=value
    })
    console.log(this.list)
  }

  supp(i:number){
    /*const index = this.List.indexOf(item);
    if (index !== -1) {
      this.List.splice(index, 1);  // Supprime l'utilisateur de la list. On peut le supprimer plusieurs fois

    }*/
    this.list.splice(i,1)
    delete(this.list[i])
  }

  search(){
    const results: User[]=[];
    const templist=this.list;
    for(const item of this.list){
      if(item.accountCategory.toLocaleString().toLowerCase().indexOf(this.filter) !== -1){
        results.push(item);
      }
    }
    this.list=results;
    if(results.length === 0 || !this.filter){
      this.list=templist;
    }
  }

  goToUpdate(id:number){
    this.router.navigate(['editUser',id]);
  }

  deleteUser(id:string){
    this.userService.deleteUser(id).subscribe(()=>alert("delectd"))
  }
}
