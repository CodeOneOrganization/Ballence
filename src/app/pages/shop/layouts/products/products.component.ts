import { AfterViewInit, Component, OnInit } from '@angular/core';
import { SidebarComponent } from "../../components/sidebar/sidebar.component";
import { filter, IProducts, size } from '../../../../model/Product.model';
import { ProductService } from '../../../../services/Product.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from "../../../../components/loading/loading.component";
import { Observable } from 'rxjs';
import { CardComponent } from "../../../../components/card/card.component";
import { GetUserChoiceAboutTheProductService } from '../../../../services/GetUserChoiceAboutTheProduct.service';
import { FilterService } from '../../../../services/FiltersService.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [SidebarComponent, HttpClientModule, CommonModule, LoadingComponent, CardComponent],
  providers: [ProductService, GetUserChoiceAboutTheProductService, FilterService],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit{

  constructor(
    private productService: ProductService, 
    private getUserChoiceAboutTheProductService: GetUserChoiceAboutTheProductService,
    private filterService: FilterService
  ){}

  protected Jackets$!: Observable<IProducts[]>;
  protected Bags$!: Observable<IProducts[]>;

  ngOnInit(): void {
    this.productService.loadProducts();
    this.filterService.loadFilter()

    const arrayProductsFilter = localStorage.getItem('filterUser')
    const arrayProductsFilterJson: filter = JSON.parse(arrayProductsFilter!)

    if(arrayProductsFilterJson.brand != undefined && arrayProductsFilterJson.size != undefined){
      this.Jackets$ = this.productService.getFiltredProducts({
        type: 'jacket', 
        brand: arrayProductsFilterJson.brand,
        size: arrayProductsFilterJson.size
      }); 
      
      this.Bags$ = this.productService.getFiltredProducts({
        type: 'bag',
        brand: arrayProductsFilterJson.brand,
        size: arrayProductsFilterJson.size
        }); 

    }else{

      this.Jackets$ = this.productService.getFiltredProducts({
        type: 'jacket', 
      }); 

      this.Bags$ = this.productService.getFiltredProducts({
        type: 'bag',
      }); 
    }
    
  }

  getChoice(id: string){
    this.getUserChoiceAboutTheProductService.getChoice(id);
    window.open('/product', '_self')
  }
}
