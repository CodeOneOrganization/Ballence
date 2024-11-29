import { Injectable } from "@angular/core";

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

  x_c!: number;
  y_c!: number;
  x_ci!: number;
  y_ci!: number;

  setCursor(config: Partial<ICursorConfig>){
    if(config.x_c){
      this.x_c = config.x_c  
    }
    
    if(config.y_c){
      this.y_c = config.y_c  
    }

    if(config.x_ci){
      this.x_ci = config.x_ci
    }

    if(config.y_ci){
      this.y_ci = config.y_ci
    }
  }
}