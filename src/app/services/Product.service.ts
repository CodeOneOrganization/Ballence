import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, map, Observable, tap } from "rxjs";
import { IProductPost, IProducts } from "../model/Product.model";

type FilterKeys = keyof IProducts;

@Injectable({ providedIn: "root" })
export class ProductService {

  constructor(private httpClient: HttpClient) {}
  private productsSubject = new BehaviorSubject<IProducts[] | null>(null);

  loadProducts(): void {
    this.httpClient.get<IProducts[]>("http://localhost:3000/products").pipe(
      tap((products) => this.productsSubject.next(products))
    ).subscribe();
  }

  getAllProducts(): Observable<IProducts[] | null>{
    return this.productsSubject.asObservable();
  }

  getProductById(id: string){
    return this.productsSubject.pipe(
      tap((products) => products?.filter((product) => product.id == id))
    )
  }

  getFiltredProducts(filter: Partial<Record<FilterKeys, any>>): Observable<IProducts[]> {
    return this.productsSubject.asObservable().pipe(
      map((products) =>
        products
          ? products.filter((product) =>
              Object.entries(filter).every(
                ([key, value]) =>
                  value === undefined || product[key as FilterKeys] === value
              )
            )
          : []
      )
    );
  }
  
  postProduct(product: IProductPost){

    const formData = new FormData()

    formData.append('name', product.name)
    formData.append('brand', product.brand)
    formData.append('price', String(product.price))
    formData.append('size', product.size)
    formData.append('img', product.img)
    formData.append('type', product.type)
    formData.append('color', product.color)
    formData.append('isNew', String(product.isNew))
    formData.append('description', product.description)
    

    this.httpClient.post<IProductPost>("http://localhost:3000/products/", formData).subscribe(data => {

      console.log(data)
    
    })
  }
}
