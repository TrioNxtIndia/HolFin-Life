import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  logo: string = 'assets/images/logo.svg';
  
  constructor(
    private router: Router
  ){}

  close() {
    const closeButton = document.querySelector('.offcanvas-header .btn-close');
    if (closeButton) {
      (closeButton as HTMLElement).click();
    }
  }
}
