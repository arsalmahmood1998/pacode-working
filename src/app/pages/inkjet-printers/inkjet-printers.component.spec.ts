import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InkjetPrintersComponent } from './inkjet-printers.component';

describe('InkjetPrintersComponent', () => {
  let component: InkjetPrintersComponent;
  let fixture: ComponentFixture<InkjetPrintersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InkjetPrintersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InkjetPrintersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
