import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const id = localStorage.getItem('idUser');
  if(id !== null){
    return true;
  }else{
    return inject(Router).createUrlTree(['btg/auth/login'])
  }
};
