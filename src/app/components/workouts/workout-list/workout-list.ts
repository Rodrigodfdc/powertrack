import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WorkoutSession } from '../../../models/workout.model';
import { AuthService } from '../../../services/auth';
import { WorkoutService } from '../../../services/workout';

@Component({
  selector: 'app-workout-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './workout-list.html',
  styleUrls: ['./workout-list.css']
})
export class WorkoutListComponent implements OnInit {
  workouts: WorkoutSession[] = [];
  filteredWorkouts: WorkoutSession[] = [];
  
  // Filtros
  showFavoritesOnly: boolean = false;

  currentUserId: string = '';

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

    this.currentUserId = user.id;
    this.loadWorkouts();
  }

  loadWorkouts(): void {
    this.workouts = this.workoutService.getWorkoutsByUser(this.currentUserId);
    this.applyFilters();
  }

  applyFilters(): void {
    this.filteredWorkouts = this.workouts;

    // Filtrar solo favoritos
    if (this.showFavoritesOnly) {
      this.filteredWorkouts = this.filteredWorkouts.filter(w => w.isFavorite);
    }

    // Ordenar por fecha (más reciente primero)
    this.filteredWorkouts.sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }

  calculateTotalVolume(workout: WorkoutSession): number {
    const squatVolume = workout.squat.weight * workout.squat.reps * workout.squat.sets;
    const benchVolume = workout.bench.weight * workout.bench.reps * workout.bench.sets;
    const deadliftVolume = workout.deadlift.weight * workout.deadlift.reps * workout.deadlift.sets;
    
    return squatVolume + benchVolume + deadliftVolume;
  }

  // ✅ MÉTODO CAMBIADO A ASYNC
  async toggleFavorite(workoutId: string): Promise<void> {
    await this.workoutService.toggleFavorite(workoutId);
    this.loadWorkouts();
  }

  // ✅ MÉTODO CAMBIADO A ASYNC
  async deleteWorkout(workoutId: string): Promise<void> {
    if (confirm('¿Estás seguro de eliminar este entrenamiento?')) {
      await this.workoutService.deleteWorkout(workoutId);
      this.loadWorkouts();
    }
  }

  editWorkout(workoutId: string): void {
    this.router.navigate(['/workout/edit', workoutId]);
  }

  goToNewWorkout(): void {
    this.router.navigate(['/workout/new']);
  }

  goToHome(): void {
    this.router.navigate(['/home']);
  }
}