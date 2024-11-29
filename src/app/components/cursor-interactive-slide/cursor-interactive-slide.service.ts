import { Injectable } from "@angular/core";


// interface tipos
interface ICursorConfig {
  x_c: number
  y_c: number
  x_ci: number
  y_ci: number
}

@Injectable({
  providedIn: "root"
})

export class CursorInteractiveSlideService implements ICursorConfig {

  //valores
  x_c!: number;
  y_c!: number;
  x_ci!: number;
  y_ci!: number;

  //função para setar os valores e verificar se existem
  setCursor(config: Partial<ICursorConfig>){

    if (config.x_c !== undefined) {
      this.x_c = config.x_c;
    }
    
    if (config.y_c !== undefined) {
      this.y_c = config.y_c;
    }

    if (config.x_ci !== undefined) {
      this.x_ci = config.x_ci;
    }

    if (config.y_ci !== undefined) {
      this.y_ci = config.y_ci;
    }
  }
}