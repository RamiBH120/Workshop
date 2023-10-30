import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { UserService } from 'src/app/core/service/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})

export class AddUserComponent implements OnInit {
  constructor(private userService:UserService,private route:Router){

  }

  users:User[]=[]

  user:User={
    "id": 5,
    "firstName": "Robert",
    "lastName": "Downey",
    "birthDate": "1999-06-30",
    "accountCategory": "Blocked Account",
    "email": "robert@nicholson.com",
    "password": "test",
    "picture": "https://bootdey.com/img/Content/avatar/avatar5.png",
    "profession": "Software Engineer"
    }


  ngOnInit(): void {
    
  }

  add(){
    this.userService.addUser(this.user).subscribe(
      ()=>{alert('sussess'),
      this.route.navigate(['users'])
    }
    )
  }

  addng(u:User){
    u.id=16
    u.picture="https://bootdey.com/img/Content/avatar/avatar5.png"
    this.userService.addUser(u).subscribe(
      ()=>{alert('sussess'),
      this.route.navigate(['users'])
    }
    )}

}
