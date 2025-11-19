import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegistraseComponent {

  constructor(private router: Router) {}

  goLogin() {
    this.router.navigate(['/login']);
  }

  showPassword = false;

togglePassword() {
  this.showPassword = !this.showPassword;
}
}