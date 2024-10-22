import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { Observable } from 'rxjs';
import { ResponseLogin } from '../../auth/services/interface/response';


export class UserService {
  public http = inject(HttpClient);
  public urlUser = `${environment.urlBackend}/api/v1/usuarios`;

  public userById(id: string | null): Observable<ResponseLogin>{
    return this.http.get<ResponseLogin>(`${this.urlUser}/${id}`)
  }
}
