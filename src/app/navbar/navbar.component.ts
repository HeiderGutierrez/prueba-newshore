import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public isOpen: boolean = false;
  public isSubmenu: boolean = false;
  public mobileSubmenu: boolean = false;

  title = 'My App';
  links = [
    {
      label: 'Inicio',
      url: '/'
    },
    {
      label: 'Nosotros',
      url: '/nosotros'
    },
    {
      label: 'Contacto',
      url: '/contacto'
    }
  ];

  constructor() { }

  ngOnInit() { }

  toggleMenu() {
    this.isOpen = !this.isOpen;
    this.mobileSubmenu = false;
  }

  toggleSubmenu() {
    this.isSubmenu = !this.isSubmenu;
  }

  toggleMobileSubmenu() {
    this.mobileSubmenu = !this.mobileSubmenu;
  }

}
