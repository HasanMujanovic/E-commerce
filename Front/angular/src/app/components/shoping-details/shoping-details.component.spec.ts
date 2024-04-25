import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopingDetailsComponent } from './shoping-details.component';

describe('ShopingDetailsComponent', () => {
  let component: ShopingDetailsComponent;
  let fixture: ComponentFixture<ShopingDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopingDetailsComponent]
    });
    fixture = TestBed.createComponent(ShopingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
