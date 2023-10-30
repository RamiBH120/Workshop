import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products:Product[]=[
    { id: 1, code: 127,libelle: "TV", prixunitaire : 2000, tauxTva :10},
    { id: 2, code: 128,libelle: "TV", prixunitaire : 1000, tauxTva :20},
    { id: 3, code: 128,libelle: "Table", prixunitaire : 200, tauxTva :30},
    ]

  
  url:string='http://localhost:3000/products';

  constructor(private http:HttpClient) { }

  getAllProducts():Product[]{
    return this.products
  }

  getNbProductsByLibelle(libelle?:string){
    
    return this.products.filter(v1=>v1.libelle==libelle)
    
  }

  getAllProductsObs():Observable<Product[]>{
    /*let headers = new Headers({ 'Accept': 'application/json', 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
return this.http.get(this.url, { headers: headers }).map(res => res.json());*/

    return this.http.get<Product[]>(this.url)
  }

}
