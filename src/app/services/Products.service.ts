import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { IProducts } from "../model/Product.model";
import { BehaviorSubject, map, Observable, tap } from "rxjs";

@Injectable({providedIn: 'root'})
export class ProductService{

  private productsSubject = new BehaviorSubject<IProducts[]>([]);
  private apiUrl = 'http://localhost:3000/products'

  constructor(private httpClient: HttpClient){
    this.httpClient.get<IProducts[]>(this.apiUrl).pipe(
      tap((data) => this.productsSubject.next(data))
      ).subscribe();
  }

  loadProducts(): void {
   
  }

  getAllProducts(): Observable<IProducts[]> {
    console.log(this.productsSubject.asObservable())
    return this.productsSubject.asObservable();
  }

  getFiltredProducts(type: string): Observable<IProducts[]> {
    return this.productsSubject.asObservable().pipe(
    map((products) => products?.filter((x) => x.type === type) || [])
    );
  }

}