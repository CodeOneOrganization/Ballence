import { Injectable } from "@angular/core";
import { ProductService } from "./Product.service";
import { IProducts } from "../model/Product.model";
import { Observable } from "rxjs";

@Injectable({providedIn: "root"})
export class GetUserChoiceOfProductService{

  private Choice!: Observable<IProducts[] | null>;

  constructor(
    private productService: ProductService
  ){}

  public getChoice(id: string){
    this.Choice = this.productService.getProductById(id)
    return this.Choice
  }
}