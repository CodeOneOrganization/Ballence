import { Component } from '@angular/core';
import { HeroComponent } from "./layouts/hero/hero.component";

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [HeroComponent],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent {

}
