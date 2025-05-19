import { Injectable } from "@angular/core";
import { filter, size } from "../model/Product.model";

@Injectable({providedIn: 'root'})
export class FilterService{

  private filter: filter = {
    brand: undefined,
    size: undefined
  }

  loadFilter(){
    
    const arrayProductsFilter = localStorage.getItem('filterUser')
    const arrayProductsFilterJson: filter = JSON.parse(arrayProductsFilter!)

    this.filter = {
      brand: arrayProductsFilterJson.brand,
      size: arrayProductsFilterJson.size
    }

  }

  saveFilterBrand(brand: string){

    this.filter = {
      brand: brand,
      size: this.filter.size 
    }

    localStorage.setItem('filterUser', JSON.stringify(this.filter))

    setTimeout(()=> {
      window.location.reload()
    }, 500)

    console.log(this.filter)
   }

   saveFilterSize(size: string){

    
    this.filter = {
      brand: this.filter.brand,
      size: size as size
    }

    localStorage.setItem('filterUser', JSON.stringify(this.filter))


    console.log(this.filter)
   }

   cleanFilters(){
    this.filter = {
      brand: undefined,
      size: undefined
    }

    localStorage.setItem('filterUser', JSON.stringify(this.filter))
    setTimeout(()=> {
      window.location.reload()
    }, 1500)

    console.log(this.filter)
   }
}