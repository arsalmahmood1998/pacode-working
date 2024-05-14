import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintApplyComponent } from './print-apply.component';

describe('PrintApplyComponent', () => {
  let component: PrintApplyComponent;
  let fixture: ComponentFixture<PrintApplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintApplyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintApplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
