import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UjallatComponent } from './ujallat.component';

describe('UjallatComponent', () => {
  let component: UjallatComponent;
  let fixture: ComponentFixture<UjallatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UjallatComponent]
    });
    fixture = TestBed.createComponent(UjallatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
