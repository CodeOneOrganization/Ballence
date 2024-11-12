import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighFashionClothingsComponent } from './high-fashion-clothings.component';

describe('HighFashionClothingsComponent', () => {
  let component: HighFashionClothingsComponent;
  let fixture: ComponentFixture<HighFashionClothingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HighFashionClothingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HighFashionClothingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
