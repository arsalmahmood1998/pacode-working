import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintAndApplyProductDetailComponent } from './print-and-apply-product-detail.component';

describe('PrintAndApplyProductDetailComponent', () => {
  let component: PrintAndApplyProductDetailComponent;
  let fixture: ComponentFixture<PrintAndApplyProductDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintAndApplyProductDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintAndApplyProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
