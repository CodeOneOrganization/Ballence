import { AfterViewInit, Component } from '@angular/core';
import { LoadingComponent } from '../../../../components/loading/loading.component';
import { CardComponent } from '../../../../components/card/card.component';
import { ProductService } from '../../../../services/Product.service';
import { HttpClientModule } from '@angular/common/http';
import { IProducts } from '../../../../model/Product.model';
import { Observable } from 'rxjs';
import { GetUserChoiceAboutTheProductService } from '../../../../services/GetUserChoiceAboutTheProduct.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-relacioned-products',
  standalone: true,
  imports: [LoadingComponent, CardComponent, CommonModule],
  providers: [ProductService, GetUserChoiceAboutTheProductService],
  templateUrl: './relacioned-products.component.html',
  styleUrl: './relacioned-products.component.scss'
})
export class RelacionedProductsComponent implements AfterViewInit  {

  protected Jackets$!: Observable<IProducts[]>; 

  constructor(
    private productService: ProductService,
    private getUserChoiceAboutTheProductService: GetUserChoiceAboutTheProductService
  ) { }


  ngAfterViewInit(): void {
    this.productService.loadProducts();

    const array = localStorage.getItem('userChoice')
    const arrayJson = array ? JSON.parse(array) : []

    this.Jackets$ = this.productService.getFiltredProducts({type: `${arrayJson[0].type}`});
  }

  getChoice(id: string){
    this.getUserChoiceAboutTheProductService.getChoice(id);
    window.open('/product', '_self')
  }
}
