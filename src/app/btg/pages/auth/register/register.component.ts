import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  router = inject(Router);

  public backRegister(): void{
    this.router.navigateByUrl('/btg/auth/login')
  }
}
