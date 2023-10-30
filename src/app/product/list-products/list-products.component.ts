import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/core/service/product.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  ListProducts: Product[] = [];


  selectedProd:any;
  nbProductsByLibelle!:number

  constructor(private productService:ProductService){

  }

  ngOnInit(): void {
    this.productService.getAllProductsObs().subscribe(v=>{
      this.ListProducts=v
    })
  }

  getNbProductsByLibelle(libelle?:string){
    return this.productService.getNbProductsByLibelle(libelle).length
  }

  getNbProductsByLibelleObs(libelle?:string){
    return this.productService.getAllProductsObs().subscribe(v=>{
      this.nbProductsByLibelle=v.filter(v1=>v1.libelle==libelle).length
    })
  }

  count(p?:Product){
    this.selectedProd=p;
    //this.nbProductsByLibelle=this.productService.getNbProductsByLibelle(p?.libelle).length
    this.getNbProductsByLibelleObs(p?.libelle)
  }
}
