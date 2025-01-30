import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from "../../components/sidebar/sidebar.component";
import { IProducts } from '../../../../model/Product.model';
import { ProductService } from '../../../../services/Products.service';
import { SlideComponent } from "../../../../components/slide/slide.component";
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from "../../../../components/loading/loading.component";
import { Observable } from 'rxjs';
import { CardComponent } from "../../../../components/card/card.component";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [SidebarComponent, HttpClientModule, CommonModule, LoadingComponent, CardComponent],
  providers: [ProductService],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit{

  constructor(private productService: ProductService) {}
  protected Jackets$!: Observable<IProducts[]>;

  ngOnInit(): void {
    this.productService.loadProducts();
    this.Jackets$ = this.productService.getFiltredProducts('jacket'); 

    
  }
}
