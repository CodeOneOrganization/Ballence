import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeCardsComponent } from './fake-cards.component';

describe('FakeCardsComponent', () => {
  let component: FakeCardsComponent;
  let fixture: ComponentFixture<FakeCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FakeCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FakeCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
