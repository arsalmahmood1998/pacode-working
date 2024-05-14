import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelingSystemsProductDetailComponent } from './labeling-systems-product-detail.component';

describe('LabelingSystemsProductDetailComponent', () => {
  let component: LabelingSystemsProductDetailComponent;
  let fixture: ComponentFixture<LabelingSystemsProductDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabelingSystemsProductDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelingSystemsProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
