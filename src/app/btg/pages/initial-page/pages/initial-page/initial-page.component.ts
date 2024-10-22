import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-initial-page',
  standalone: false,
  templateUrl: './initial-page.component.html',
  styleUrl: './initial-page.component.scss'
})
export class InitialPageComponent {

  router = inject(Router);

  public actionBtn(): void{
    this.router.navigateByUrl('/btg/auth/login')
  }
}
