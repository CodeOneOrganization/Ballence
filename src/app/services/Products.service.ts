import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { IProducts } from "../model/Product.model";

@Injectable({providedIn: 'root'})
export class ProductService{

  public Products!: IProducts[]

  constructor(private httpClient: HttpClient){
    this.httpClient.get<IProducts[]>("http://localhost:3000/products").subscribe((data) =>{
      this.Products = data
    })
  }

  getAllProducts(){
   return this.Products
  }

  getFiltredProducts(type: string){
    return this.Products?.filter((x) => x.type == `${type}`)
  }
}