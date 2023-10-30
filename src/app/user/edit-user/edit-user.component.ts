import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  id!:number;

  constructor(private route:ActivatedRoute){
  }

  ngOnInit(): void {
    this.getId()
  }

  getId(){
    this.route.snapshot.paramMap.get('id')
  }
}
