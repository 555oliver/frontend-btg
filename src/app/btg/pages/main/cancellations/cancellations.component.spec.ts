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

  // it('should filter transactions based on user ID and action type', () => {
  //   // Simular un ID de usuario en localStorage

  //   const userId = '67195526d4530d2d45e84278';
  //   localStorage.setItem('idUser', userId);

  //   // Simular respuesta del servicio
  //   const mockResponse = [
  //     {
  //       _id: '6719556fd4530d2d45e842ac',
  //       saldo: 60000,
  //       tipo_accion: 'Cancelación',
  //       fondo: {
  //         _id: '671699c8f0d5a63e7946f817',
  //         nombre_fondo: 'deudaprivada',
  //         monto_minimo: 50000,
  //         estado: 'activo',
  //         categoria_fondo: 'FIC',
  //         __v: 0,
  //       },
  //       usuario: {
  //         _id: '67195526d4530d2d45e84278',
  //         nombre_usuario: 'oliver10',
  //         correo: 'olivercharry123@gmail.com',
  //         monto: 655000,
  //         password:
  //           '$2a$10$95OCQsTJgjDbq8ebRm29nOALIBfeF1zfsp6opwrC9sC1IwpUygYVy',
  //         fondos: [],
  //         __v: 0,
  //       },
  //       fecha_creacion: '2024-10-23T19:58:39.028Z',
  //       __v: 0,
  //     },
  //   ];

  //   // Aquí se utiliza 'and.returnValue' correctamente
  //   userService.allTransactions.and.returnValue(of(mockResponse)); // Configurar el espía para devolver un Observable
  //   console.log(component.transactions);
  //   // Llamar al método transactionsAlls
  //   // component.transactionsAlls();

  //   // // Verificar que se asignaron las transacciones filtradas
  //   // expect(component.transactions).toEqual([
  //   //   {
  //   //     _id: '6719417f21c21533d71e8072',
  //   //     saldo: 90000,
  //   //     tipo_accion: 'Apertura',
  //   //     fondo: {
  //   //       _id: '671699c8f0d5a63e7946f817',
  //   //       nombre_fondo: 'deudaprivada',
  //   //       monto_minimo: 50000,
  //   //       estado: 'activo',
  //   //       categoria_fondo: 'FIC',
  //   //       __v: 0,
  //   //     },
  //   //     usuario: {
  //   //       _id: '671833b346806b94e490faa6',
  //   //       nombre_usuario: 'lorena123',
  //   //       correo: 'lorena.charry10@example.com',
  //   //       monto: 4000000,
  //   //       password:
  //   //         '$2a$10$2ZN1RrZ9EVUQHeAKT98snO/aYzdaE8YrxuipvfRv8hbGOQiWC0WeO',
  //   //       fondos: ['671699c8f0d5a63e7946f817', '671699f3f0d5a63e7946f81b'],
  //   //       __v: 0,
  //   //     },
  //   //     fecha_creacion: '2024-10-23T18:33:35.916Z',
  //   //     __v: 0,
  //   //   },
  //   // ]);
  // });
});
