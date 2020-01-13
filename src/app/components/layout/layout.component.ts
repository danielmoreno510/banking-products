import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(protected authenticationService: AuthenticationService) { }

  @Output() logout = new EventEmitter();
  username = 'Miguel';
  menu = false;
  options = [
    { title: 'TU ORGANIZADOR', subtitle: 'NUEVO' },
    { title: 'PAGOS', subtitle: false },
    { title: 'TRANSFERENCIAS', subtitle: false },
    { title: 'CERTIFICADOS', subtitle: false },
    { title: 'SEGURIDAD', subtitle: false }
  ];

  activeMenu = () => {
    setTimeout(() => {
      this.menu = !this.menu;
    }, 100);
  }

  closeMenu = () => this.menu ? this.menu = false : this.menu;

  ngOnInit() {
  }

}
