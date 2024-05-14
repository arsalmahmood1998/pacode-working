import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegraOneComponent } from './integra-one.component';

describe('IntegraOneComponent', () => {
  let component: IntegraOneComponent;
  let fixture: ComponentFixture<IntegraOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntegraOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegraOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
