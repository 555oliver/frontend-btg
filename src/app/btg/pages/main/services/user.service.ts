import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { Observable, tap } from 'rxjs';
import { ResponseLogin } from '../../auth/services/interface/response';
import { ResponseFunds, ResponseTransactions, ResponseUsers } from './interfaces/response';
import {
  BodyTransactions,
  BodyTransactionsUpdate,
  BodyUser,
} from './interfaces/body-transactions';

export class UserService {
  public http = inject(HttpClient);
  public urlUser = `${environment.urlBackend}/api/v1/usuarios`;
  public urlFunds = `${environment.urlBackend}/api/v1/fondos`;
  public urlTransactions = `${environment.urlBackend}/api/v1/transaciones`;

  public userById(id: string | null): Observable<ResponseLogin> {
    return this.http.get<ResponseLogin>(`${this.urlUser}/${id}`);
  }

  public createUser(body: BodyUser): Observable<ResponseUsers>{
    return this.http.post<ResponseUsers>(`${this.urlUser}`, body);
  }

  public userUpdate(id: string, body: any){
    return this.http.patch(`${this.urlUser}/${id}`, body);
  }

  public fundsAll(): Observable<ResponseFunds[]> {
    return this.http.get<ResponseFunds[]>(`${this.urlFunds}`);
  }

  public fundsById(id: string): Observable<ResponseFunds> {
    return this.http.get<ResponseFunds>(`${this.urlFunds}/${id}`);
  }

  public allTransactions(): Observable<ResponseTransactions[]> {
    return this.http.get<ResponseTransactions[]>(`${this.urlTransactions}`);
  }
  public createTransactions(
    body: BodyTransactions
  ): Observable<ResponseTransactions> {
    return this.http.post<ResponseTransactions>(
      `${this.urlTransactions}`,
      body
    );
  }

  public updateTransactions(
    body: BodyTransactionsUpdate,
    id: string
  ): Observable<ResponseTransactions> {
    return this.http.patch<ResponseTransactions>(
      `${this.urlTransactions}/${id}`,
      body
    );
  }
}
