import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InkRollMy380Component } from './ink-roll-my380.component';

describe('InkRollMy380Component', () => {
  let component: InkRollMy380Component;
  let fixture: ComponentFixture<InkRollMy380Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InkRollMy380Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InkRollMy380Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
