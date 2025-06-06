import { Component } from '@angular/core';
import { HeroComponent } from "./layouts/hero/hero.component";
import { RelacionedProductsComponent } from "./layouts/relacioned-products/relacioned-products.component";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [HeroComponent, RelacionedProductsComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

}
