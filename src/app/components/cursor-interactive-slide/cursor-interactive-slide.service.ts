import { Injectable } from "@angular/core";


// interface tipos
interface ICursorConfig {
  x_c: number
  y_c: number
  height: number
  x_ci: number
  y_ci: number
}

@Injectable({
  providedIn: "root"
})

export class CursorInteractiveSlideService implements ICursorConfig {

  //valores
  x_c!: number;
  height!: number;
  y_c!: number;
  x_ci!: number;
  y_ci!: number;

  setCursor(config: Partial<ICursorConfig>){
    for (const key of Object.keys(config) as (keyof ICursorConfig)[]) {
      if(key in config){
        (this as any)[key] = config[key as keyof typeof config]
      }
    }
  }
}