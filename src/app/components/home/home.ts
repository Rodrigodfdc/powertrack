import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth';        // ← CORREGIDO
import { WorkoutService } from '../../services/workout';  // ← CORREGIDO

interface PersonalRecord {
  exercise: string;
  weight: number;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent implements OnInit {
  username: string = '';
  totalWorkouts: number = 0;
  weekWorkouts: number = 0;
  personalRecords: PersonalRecord[] = [];
  recentWorkouts: any[] = [];

  constructor(
    private router: Router,
    private authService: AuthService,
    private workoutService: WorkoutService
  ) {}

  ngOnInit(): void {
    const user = this.authService.currentUserValue;
    
    if (!user) {
      this.router.navigate(['/login']);
      return;
    }

    this.username = user.username;
    this.loadStatistics(user.id);
  }

loadStatistics(userId: string): void {
  // Usar el servicio
  const stats = this.workoutService.getStats(userId);
  this.totalWorkouts = stats.total;
  this.weekWorkouts = stats.thisWeek;

  this.personalRecords = this.workoutService.getPersonalRecords(userId);
  
  // Obtener últimos entrenamientos
  const allWorkouts = this.workoutService.getWorkoutsByUser(userId);
  this.recentWorkouts = allWorkouts
    .sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5)
    .map((w: any) => ({
      id: w.id,
      date: w.date,
      exercises: [
        w.squat.weight > 0 ? `Sentadilla ${w.squat.weight}kg` : null,
        w.bench.weight > 0 ? `Press Banca ${w.bench.weight}kg` : null,
        w.deadlift.weight > 0 ? `Peso Muerto ${w.deadlift.weight}kg` : null
      ].filter(e => e !== null).join(', ')
    }));
}

  goToWorkouts(): void {
    this.router.navigate(['/workouts']);
  }

  goToNewWorkout(): void {
    this.router.navigate(['/workout/new']);
  }

  goToRestDays(): void {
    this.router.navigate(['/rest-days']);
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}