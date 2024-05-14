import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InkRollDk1100Component } from './ink-roll-dk1100.component';

describe('InkRollDk1100Component', () => {
  let component: InkRollDk1100Component;
  let fixture: ComponentFixture<InkRollDk1100Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InkRollDk1100Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InkRollDk1100Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
