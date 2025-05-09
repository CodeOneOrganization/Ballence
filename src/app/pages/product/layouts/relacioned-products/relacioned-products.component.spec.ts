import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelacionedProductsComponent } from './relacioned-products.component';

describe('RelacionedProductsComponent', () => {
  let component: RelacionedProductsComponent;
  let fixture: ComponentFixture<RelacionedProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelacionedProductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelacionedProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
