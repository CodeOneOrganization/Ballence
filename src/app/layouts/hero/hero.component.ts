import { Component } from '@angular/core';
import { ButtonComponent } from "../../components/button/button.component";
import { MarqueeComponent } from "../../components/marquee/marquee.component";

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ButtonComponent, MarqueeComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
}
