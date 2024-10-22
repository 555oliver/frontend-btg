import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
@Input() textBtn!: string;
@Input() isLogin!: boolean;
@Output() actionBtnOut: EventEmitter<string> = new EventEmitter<string>();

actionBtn(value: boolean): void{  
  this.actionBtnOut.emit()
}
}
