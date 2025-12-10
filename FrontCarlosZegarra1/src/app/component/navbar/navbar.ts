import {Component, inject} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {MatToolbar} from '@angular/material/toolbar';
import {MatIcon} from '@angular/material/icon';
import {NgIf} from '@angular/common';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink,
    MatButton,
    MatToolbar,
    MatIcon,
    NgIf,
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  router: Router = inject(Router);
  protected readonly localStorage = localStorage;

  cerrarSesion(): void {
    localStorage.clear();
    sessionStorage.clear();

    // Luego rediriges al login o página principal
    this.router.navigate(['/Login']);
  }
}
