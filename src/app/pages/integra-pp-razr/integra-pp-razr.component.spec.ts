import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegraPpRazrComponent } from './integra-pp-razr.component';

describe('IntegraPpRazrComponent', () => {
  let component: IntegraPpRazrComponent;
  let fixture: ComponentFixture<IntegraPpRazrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntegraPpRazrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegraPpRazrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
