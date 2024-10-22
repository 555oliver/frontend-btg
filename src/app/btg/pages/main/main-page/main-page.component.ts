import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { ResponseLogin } from '../../auth/services/interface/response';

@Component({
  selector: 'app-main-page',
  standalone: false,
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

  public router = inject(Router);
  public userService = inject(UserService)
  public username: string = "";
  public monto: number = 0;
  ngOnInit(): void {
    this.dataUser()
  }

  public dataUser(): void{
    const id = localStorage.getItem('idUser');
    this.userService.userById(id).subscribe({
      next: (response => {
        this.username = response.nombre_usuario;
        this.monto = response.monto;  
      }
      )
    })
  }

  public logout(): void{
    localStorage.removeItem('idUser');
    this.router.navigateByUrl('/btg/auth/login')
    
  }
}
