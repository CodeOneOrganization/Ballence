import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from "../../components/sidebar/sidebar.component";
import { IProducts } from '../../../../model/Product.model';
import { ProductService } from '../../../../services/Products.service';
import { SlideComponent } from "../../../../components/slide/slide.component";
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [SidebarComponent, SlideComponent, HttpClientModule],
  providers: [ProductService],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

  constructor(private productService: ProductService) {}

  getFiltred(type: string){
   return this.productService.getFiltredProducts(`${type}`)
  }

  
}
