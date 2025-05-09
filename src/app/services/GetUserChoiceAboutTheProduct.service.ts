import { Injectable } from "@angular/core";
import { ProductService } from "./Product.service";
import { IProducts } from "../model/Product.model";

@Injectable({providedIn: "root"})
export class GetUserChoiceAboutTheProductService{

  private Choice!: IProducts[] | [];

  constructor(
    private productService: ProductService
  ){}

  public getChoice(id: string){
    
    this.productService.getProductById(id).subscribe((data) => localStorage.setItem('userChoice', JSON.stringify(data?.filter(x => x.id == id))))

  }

  public returnChoice(){
    const arrayChoice = localStorage.getItem('userChoice');
    this.Choice = arrayChoice ? JSON.parse(arrayChoice) : []
    console.log(this.Choice)

    return this.Choice
  }

}