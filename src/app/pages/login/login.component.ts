import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from "../../service/auth";
import { Router } from "@angular/router";
@Component({
  selector: "app-inicio-secion",
  standalone: false,
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  login() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const data = this.loginForm.value;
    console.log("DATA ENVIADA:", this.loginForm.value);

    this.authService.login(data).subscribe({
      next: (response) => {
        console.log('Login exitoso:', response);
        
        // Si el backend devuelve un token:
        // localStorage.setItem('token', response.token);

        alert('Inicio de sesión exitoso');
      },
      error: (err) => {
        console.error('Error en login:', err);
        alert('Credenciales incorrectas');
      }
    });
  }
  passwordVisible = false;

  togglePassword() {
    this.passwordVisible = !this.passwordVisible;

    const input = document.querySelector('.input-pass') as HTMLInputElement;
    if (input) {
      input.type = this.passwordVisible ? 'text' : 'password';
    }
  }

  goRegister() {
    this.router.navigate(['/register']);
  }
}
