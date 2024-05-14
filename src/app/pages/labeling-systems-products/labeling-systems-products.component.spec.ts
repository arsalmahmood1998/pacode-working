import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelingSystemsProductsComponent } from './labeling-systems-products.component';

describe('LabelingSystemsProductsComponent', () => {
  let component: LabelingSystemsProductsComponent;
  let fixture: ComponentFixture<LabelingSystemsProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabelingSystemsProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelingSystemsProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
