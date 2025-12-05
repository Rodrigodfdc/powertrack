import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-rest-days',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './rest-days.html',
  styleUrls: ['./rest-days.css']
})
export class RestDaysComponent implements OnInit {
  restDays: string[] = [];
  selectedDate: string = '';
  currentUserId: string = '';

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    const user = this.authService.currentUserValue;
    if (!user) {
      this.router.navigate(['/login']);
      return;
    }

    this.currentUserId = user.id;
    this.loadRestDays();
  }

  loadRestDays(): void {
    const allRestDays = JSON.parse(localStorage.getItem('powertrack-restdays') || '{}');
    this.restDays = allRestDays[this.currentUserId] || [];
    this.restDays.sort().reverse();
  }

  addRestDay(): void {
    if (!this.selectedDate) return;

    if (!this.restDays.includes(this.selectedDate)) {
      this.restDays.push(this.selectedDate);
      this.saveRestDays();
      this.selectedDate = '';
    }
  }

  removeRestDay(date: string): void {
    this.restDays = this.restDays.filter(d => d !== date);
    this.saveRestDays();
  }

  saveRestDays(): void {
    const allRestDays = JSON.parse(localStorage.getItem('powertrack-restdays') || '{}');
    allRestDays[this.currentUserId] = this.restDays;
    localStorage.setItem('powertrack-restdays', JSON.stringify(allRestDays));
    this.loadRestDays();
  }

  goToHome(): void {
    this.router.navigate(['/home']);
  }
}
