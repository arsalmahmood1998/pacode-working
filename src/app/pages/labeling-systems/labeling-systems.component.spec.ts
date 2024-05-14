import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelingSystemsComponent } from './labeling-systems.component';

describe('LabelingSystemsComponent', () => {
  let component: LabelingSystemsComponent;
  let fixture: ComponentFixture<LabelingSystemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabelingSystemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelingSystemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
