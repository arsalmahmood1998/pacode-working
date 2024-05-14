import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrinterCartridgesComponent } from './printer-cartridges.component';

describe('PrinterCartridgesComponent', () => {
  let component: PrinterCartridgesComponent;
  let fixture: ComponentFixture<PrinterCartridgesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrinterCartridgesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrinterCartridgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
