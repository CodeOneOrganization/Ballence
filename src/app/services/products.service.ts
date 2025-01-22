import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { IProducts } from "../model/Product.model";

@Injectable({providedIn: 'root'})
export class ProductService{

  constructor(private httpClient: HttpClient){}

  getAllProducts(){
   return this.httpClient.get<IProducts[]>("http://localhost:3000/products");
  }

}