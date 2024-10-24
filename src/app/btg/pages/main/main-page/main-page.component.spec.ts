import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageComponent } from './main-page.component';
import { SharedModule } from '../../../shared/shared.module';
import { Router, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../services/user.service';
import { MainRoutingModule } from '../main-routing.module';

describe('MainPageComponent', () => {
  let component: MainPageComponent;
  let fixture: ComponentFixture<MainPageComponent>;
  let router: Router;
  beforeEach(async () => {
    const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']); // Crear un espía para el Router
    await TestBed.configureTestingModule({
      declarations: [MainPageComponent],
      imports: [
        SharedModule,
        RouterModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        MainRoutingModule,

      ],
      providers: [UserService, { provide: Router, useValue: routerSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(MainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should remove idUser from localStorage and navigate to /btg/auth/login', () => {
  //   const localStorageSpy = spyOn(localStorage, 'removeItem');
  //   component.logout();
  //   expect(localStorageSpy).toHaveBeenCalledWith('idUser');
  //   expect(router.navigateByUrl).toHaveBeenCalledWith('/btg/auth/login');
  // });
});
