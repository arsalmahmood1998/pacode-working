import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegraUltimateComponent } from './integra-ultimate.component';

describe('IntegraUltimateComponent', () => {
  let component: IntegraUltimateComponent;
  let fixture: ComponentFixture<IntegraUltimateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntegraUltimateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegraUltimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
