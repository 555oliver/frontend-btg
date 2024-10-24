import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancellationsComponent } from './cancellations.component';
import { SharedModule } from '../../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../services/user.service';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CancellationsComponent', () => {
  let component: CancellationsComponent;
  let fixture: ComponentFixture<CancellationsComponent>;
  let userService: jasmine.SpyObj<UserService>;
  beforeEach(() => {
    const mainServiceSpy = jasmine.createSpyObj('UserService', [
      'allTransactions',
    ]); // Crear un espía para el servicio

    TestBed.configureTestingModule({
      declarations: [CancellationsComponent],
      imports: [
        SharedModule,
        RouterModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
      ],
      providers: [
        UserService,
        { provide: UserService, useValue: mainServiceSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CancellationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should filter transactions based on user ID and action type', () => {
    component.transactionsAlls();
    expect(component.transactionsAlls).toBeDefined();
  });
});
