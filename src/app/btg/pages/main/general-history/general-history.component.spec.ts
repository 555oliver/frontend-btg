import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralHistoryComponent } from './general-history.component';

describe('GeneralHistoryComponent', () => {
  let component: GeneralHistoryComponent;
  let fixture: ComponentFixture<GeneralHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneralHistoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GeneralHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
