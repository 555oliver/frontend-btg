import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ResponseTransactions } from '../services/interfaces/response';

@Component({
  selector: 'app-cancellations',
  standalone: false,
  templateUrl: './cancellations.component.html',
  styleUrl: './cancellations.component.scss'
})
export class CancellationsComponent implements OnInit{
  public mainService = inject(UserService);
  public transactions: ResponseTransactions[] = [];
  ngOnInit(): void {

    this.transactionsAlls();
  }

  public transactionsAlls(): void {
    this.mainService.allTransactions().subscribe({
      next: (response) => {
        this.transactions = response.filter(
          (value) =>
            value.usuario?._id === localStorage.getItem('idUser')! &&
            value.tipo_accion === 'Cancelación'
        );
      },
    });
  }
}
