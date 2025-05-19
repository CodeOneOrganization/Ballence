import { Component, ViewChild, ElementRef } from '@angular/core';
import gsap from 'gsap';
import { filter, size } from '../../../../model/Product.model';
import { FilterService } from '../../../../services/FiltersService.service';



@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  providers: [FilterService],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  
   @ViewChild('aside') aside!: ElementRef
   @ViewChild('filters') filters!: ElementRef

    private isFilterOpen!: boolean
    private isBrandListOpen!: boolean
    private isSizeListOpen!: boolean


    constructor(private filterService: FilterService){}

    //animação para abrir o filtro de pesquisa
   toggleFilter(){

    gsap.to(this.filters.nativeElement,{
      paddingLeft: this.isFilterOpen ? '1.45vw' : '15vw',
      duration: 1,
      ease: 'power2.inOut'
    });

    gsap.to(this.aside.nativeElement,{
      x: this.isFilterOpen ? "-100%" : "0%",
      duration: 1,
      ease: 'power2.inOut',
    })
    
    this.setIsFilterOpen()

    gsap.to(this.filters.nativeElement,{
      color: this.isFilterOpen ? '#B6E02A' : '#0b5294', 
      duration: 1,
      ease: "power2.inOut"
    })

    gsap.to(".line",{
      width: this.isFilterOpen ? "100vw" : '0vw',
      duration: 1,
      ease: 'power2.inOut',
      delay:  .5  
    })

   }

   toogleBrandList(){
    gsap.to(".list-filter-brands",{
      height: this.isBrandListOpen ? "0vw" : "9.296vw",
      duration: .5,
      ease: "power2.inOut"
    })

    
    this.setIsBrandListOpen()
   }

   toogleSizeList(){
    gsap.to(".list-filter-sizes",{
      height: this.isSizeListOpen ? "0vw" : "18.592vw",
      duration: .5,
      ease: "power2.inOut"
    })

    this.setIsSizeListOpen()
   }

   setIsFilterOpen(){
    this.isFilterOpen = !this.isFilterOpen
   }

   setIsBrandListOpen(){
    this.isBrandListOpen = !this.isBrandListOpen
   }

   setIsSizeListOpen(){
    this.isSizeListOpen = !this.isSizeListOpen
   }

   saveFilterBrand(brand: string){
    this.filterService.saveFilterBrand(brand)
   }

   saveFilterSize(size: string){
    this.filterService.saveFilterSize(size)
  }

  cleanFilters(){
    this.filterService.cleanFilters()
  }
}
