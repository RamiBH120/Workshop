import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent {

  constructor(private router:Router){

  }
  add(){
    this.router.navigate(['addUser'])
  }
}
