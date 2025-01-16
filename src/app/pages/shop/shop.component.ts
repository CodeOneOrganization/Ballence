import { Component } from '@angular/core';
import { HeroComponent } from "./layouts/hero/hero.component";
import { ProductsComponent } from "./layouts/products/products.component";

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [HeroComponent, ProductsComponent],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent {
  
}
