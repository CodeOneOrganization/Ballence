import { Component } from '@angular/core';
import { ButtonComponent } from "../../../../components/button/button.component";
import { IProducts } from '../../../../model/Product.model';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../../../../services/Product.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ButtonComponent],
  providers: [ProductService],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {


  constructor(private productService: ProductService){}

  protected product!: IProducts

  submit(){
    this.productService.postProduct(this.product)
  }


}
