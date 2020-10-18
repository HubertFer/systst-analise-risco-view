import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRiskComponent } from './form-risk.component';

describe('FormRiskComponent', () => {
  let component: FormRiskComponent;
  let fixture: ComponentFixture<FormRiskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormRiskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRiskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
