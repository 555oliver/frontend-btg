import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Login } from '../services/interface/login';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  form!: FormGroup;
  router = inject(Router);
  builderForm = inject(FormBuilder);
  authService = inject(AuthService);
  ngOnInit(): void {
    this.dataBuilder();
  }

  public dataBuilder(): void{
    this.form = this.builderForm.group({
      correo: ['', [Validators.email]],
      password: ['', [Validators.min(4),Validators.max(50)]]
    })
  }

  public register(){
    this.router.navigateByUrl('/btg/auth/register')
  }
  public login(data: Login): void{
    this.authService.login(data).subscribe({
      next: (response => this.nextResponde(response)),
      error: (err => this.errorResponse(err))
    })
  }

  nextResponde(response: any){
    if(response){
      Swal.fire({
        title: "OK",
        text: `Cardando...`,
        icon: "success"
      });
      this.router.navigate(['/btg/main/main-page'])
    }
  }

  errorResponse(err: any): void{
    if(err){
      console.log(err);
      Swal.fire({
        title: "ERROR",
        text: `${err.error.message}`,
        icon: "error"
      });
    }
  }
}
