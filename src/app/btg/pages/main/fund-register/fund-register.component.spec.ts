import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundRegisterComponent } from './fund-register.component';

describe('FundRegisterComponent', () => {
  let component: FundRegisterComponent;
  let fixture: ComponentFixture<FundRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FundRegisterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FundRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
