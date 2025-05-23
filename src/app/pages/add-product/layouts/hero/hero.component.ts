import { Component, ElementRef, ViewChild } from '@angular/core';
import { ButtonComponent } from "../../../../components/button/button.component";
import { IProductPost, IProducts, size } from '../../../../model/Product.model';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../../../../services/Product.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ButtonComponent],
  providers: [ProductService],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {


  constructor(private productService: ProductService) { }
  @ViewChild('name') name!: ElementRef<HTMLInputElement>
  @ViewChild('brand') brand!: ElementRef<HTMLInputElement>
  @ViewChild('price') price!: ElementRef<HTMLInputElement>
  @ViewChild('color') color!: ElementRef<HTMLInputElement>
  @ViewChild('size') size!: ElementRef<HTMLInputElement>
  @ViewChild('img') img!: ElementRef<HTMLInputElement>
  @ViewChild('type') type!: ElementRef<HTMLInputElement>
  @ViewChild('isnew') isnew!: ElementRef<HTMLInputElement>
  @ViewChild('description') description!: ElementRef<HTMLInputElement>

  protected product!: IProductPost


  selectedFile!: File;

  onImageSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }


  submit() {

    this.product = {
      name: this.name.nativeElement.value,
      brand: this.brand.nativeElement.value,
      price: Number(this.price.nativeElement.value),
      size: this.size.nativeElement.value as size,
      img: this.selectedFile,
      type: this.type.nativeElement.value,
      color: this.color.nativeElement.value,
      isNew: Boolean(this.isnew.nativeElement.value),
      description: this.description.nativeElement.value,
    }

    this.productService.postProduct(this.product)
    

    console.log(this.img.nativeElement.files)
  }


}
