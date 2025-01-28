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
  
  protected Products!: IProducts[]

  constructor(private productService: ProductService) {
      
      this.productService.getAllProducts().subscribe((data) => {
        this.Products = data
        console.log(this.Products)
      })

    }

  getItem(type: string){

    const item = this.Products?.filter((x) => x.type == `${type}`)

    if(item){
      return item
    }

    return []

  }

  
}
