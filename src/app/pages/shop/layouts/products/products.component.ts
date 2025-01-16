import { Component } from '@angular/core';
import { SidebarComponent } from "../../components/sidebar/sidebar.component";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

}
