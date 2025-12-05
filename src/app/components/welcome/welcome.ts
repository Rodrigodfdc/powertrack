import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './welcome.html',
  styleUrls: ['./welcome.css']
})
export class WelcomeComponent implements OnInit {
  username: string = '';
  bodyWeight: number = 0;
  height: number = 0;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Obtener usuario actual
    const currentUser = localStorage.getItem('powertrack-current-user');
    
    if (currentUser) {
      const user = JSON.parse(currentUser);
      this.username = user.username;
      this.bodyWeight = user.bodyWeight;
      this.height = user.height;
    } else {
      // Si no hay usuario logueado, redirigir a login
      this.router.navigate(['/login']);
    }
  }

  goToHome(): void {
    this.router.navigate(['/home']);
  }
}
