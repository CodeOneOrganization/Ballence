import { AfterViewInit, Component, OnInit } from '@angular/core';
import { SidebarComponent } from "../../components/sidebar/sidebar.component";
import { IProducts } from '../../../../model/Product.model';
import { ProductService } from '../../../../services/Product.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from "../../../../components/loading/loading.component";
import { Observable } from 'rxjs';
import { CardComponent } from "../../../../components/card/card.component";
import { GetUserChoiceOfProductService } from '../../../../services/GetUserChoiceOfProduct.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [SidebarComponent, HttpClientModule, CommonModule, LoadingComponent, CardComponent],
  providers: [ProductService, GetUserChoiceOfProductService],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements AfterViewInit{

  constructor(
    private productService: ProductService, 
    private getUserChoiceOfProductsService: GetUserChoiceOfProductService
  ){}

  protected Jackets$!: Observable<IProducts[]>;
  protected Bags$!: Observable<IProducts[]>;

  ngAfterViewInit(): void {
    this.productService.loadProducts();
    this.Jackets$ = this.productService.getFiltredProducts('jacket'); 
    this.Bags$ = this.productService.getFiltredProducts('bag'); 
    
  }

  getChoice(id: string){
    this.getUserChoiceOfProductsService.getChoice(id)
  }
}
