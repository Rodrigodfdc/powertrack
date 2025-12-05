import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/auth';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class RegisterComponent {
  // Datos del formulario
  username: string = '';
  password: string = '';
  confirmPassword: string = '';
  bodyWeight: number = 0;
  height: number = 0;

  // Control de errores
  errorMessage: string = '';
  showError: boolean = false;
  showSuccess: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  // ✅ MÉTODO CAMBIADO A ASYNC
  async onRegister(): Promise<void> {
    // Validaciones básicas
    if (!this.username || !this.password || !this.bodyWeight || !this.height) {
      this.showError = true;
      this.errorMessage = 'Todos los campos son obligatorios';
      return;
    }

    if (this.password !== this.confirmPassword) {
      this.showError = true;
      this.errorMessage = 'Las contraseñas no coinciden';
      return;
    }

    if (this.password.length < 4) {
      this.showError = true;
      this.errorMessage = 'La contraseña debe tener al menos 4 caracteres';
      return;
    }

    // ✅ USAR EL SERVICIO PARA REGISTRO (ahora con await)
    const success = await this.authService.register({
      username: this.username,
      password: this.password,
      bodyWeight: this.bodyWeight,
      height: this.height
    });

    if (success) {
      this.showSuccess = true;
      this.showError = false;
      setTimeout(() => this.router.navigate(['/login']), 2000);
    } else {
      this.showError = true;
      this.errorMessage = 'El nombre de usuario ya existe';
    }
  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }
}