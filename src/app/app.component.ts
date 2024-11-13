import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from "./layouts/hero/hero.component";
import { NavComponent } from "./components/nav/nav.component";
import { HighFashionClothingsComponent } from "./layouts/high-fashion-clothings/high-fashion-clothings.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeroComponent, NavComponent, HighFashionClothingsComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
}
