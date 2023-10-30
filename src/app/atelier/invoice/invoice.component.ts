import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  id!:number;

  active?:boolean;

  montantFacture!:number;
  montantRemise!:number
  dateFacture!:string;

  constructor(private route:ActivatedRoute){

  }

  ngOnInit(): void {
    this.getPathParams()
    this.getQueryParams()
    
  }

  getPathParams(){
    this.route.paramMap.subscribe(data=>{
      this.id=Number(data.get('id'))
      if(data.get('active')=='true') this.active=true
      else this.active=false

    })

    this.route.queryParamMap.subscribe(data=>{
      this.montantFacture=Number(data.get('montantFacture'))
      this.montantRemise=Number(data.get('montantRemise'))
      
      this.dateFacture=String(data.get('dateFacture'))
      
    })
  }

  getQueryParams(){


    this.route.queryParamMap.subscribe(data=>{
      this.id=Number(data.get('id'))
      if(data.get('active')=='true') this.active=true
      else this.active=false
      this.montantFacture=Number(data.get('montantFacture'))
      this.montantRemise=Number(data.get('montantRemise'))
      
      this.dateFacture=String(data.get('dateFacture'))
      
    })
  }
}
