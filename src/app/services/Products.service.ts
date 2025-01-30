import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, filter, map, Observable, tap } from "rxjs";
import { IProducts } from "../model/Product.model";

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

  getFiltredProducts(type: string): Observable<IProducts[]> {
    return this.productsSubject.asObservable().pipe(
      map((products) => products ? products.filter((product) => product.type === type) : [])
    );
  }
  
}
