import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})

export class ElementsService {
  private newsElement!: HTMLDivElement | null

  public setNewsElement(element: HTMLDivElement) {
    this.newsElement = element
  }
  
  public getNewsElement(): HTMLDivElement | null {
    return this.newsElement
  }
}