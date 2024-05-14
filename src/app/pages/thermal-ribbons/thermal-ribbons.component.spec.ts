import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThermalRibbonsComponent } from './thermal-ribbons.component';

describe('ThermalRibbonsComponent', () => {
  let component: ThermalRibbonsComponent;
  let fixture: ComponentFixture<ThermalRibbonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThermalRibbonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThermalRibbonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
