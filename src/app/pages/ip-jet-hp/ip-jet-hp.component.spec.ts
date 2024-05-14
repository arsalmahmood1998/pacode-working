import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpJetHpComponent } from './ip-jet-hp.component';

describe('IpJetHpComponent', () => {
  let component: IpJetHpComponent;
  let fixture: ComponentFixture<IpJetHpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IpJetHpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IpJetHpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
