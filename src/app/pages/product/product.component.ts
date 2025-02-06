import { Component } from '@angular/core';
import { HeroComponent } from "./layouts/hero/hero.component";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [HeroComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

}
