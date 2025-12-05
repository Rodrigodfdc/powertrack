import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  // Propiedades para el formulario (UD2 - Data Binding)
  username: string = '';
  password: string = '';
  errorMessage: string = '';
  showError: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  // ✅ MÉTODO CAMBIADO A ASYNC
  async onLogin(): Promise<void> {
    if (!this.username || !this.password) {
      this.showError = true;
      this.errorMessage = 'Por favor, completa todos los campos';
      return;
    }

    // Usar el servicio para login (ahora con await)
    const success = await this.authService.login(this.username, this.password);

    if (success) {
      this.router.navigate(['/welcome']);
    } else {
      this.showError = true;
      this.errorMessage = 'Usuario o contraseña incorrectos';
    }
  }

  // Navegar a registro
  goToRegister(): void {
    this.router.navigate(['/register']);
  }
}