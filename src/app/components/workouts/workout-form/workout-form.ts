import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/auth';
import { WorkoutService } from '../../../services/workout';

@Component({
  selector: 'app-workout-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './workout-form.html',
  styleUrls: ['./workout-form.css']
})
export class WorkoutFormComponent implements OnInit {
  // Sentadilla
  squatWeight: number = 0;
  squatReps: number = 0;
  squatSets: number = 0;

  // Press Banca
  benchWeight: number = 0;
  benchReps: number = 0;
  benchSets: number = 0;

  // Peso Muerto
  deadliftWeight: number = 0;
  deadliftReps: number = 0;
  deadliftSets: number = 0;

  notes: string = '';

  isEditMode: boolean = false;
  workoutId: string = '';
  currentUserId: string = '';

  showErrors: boolean = false;
  errorMessage: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
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

    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.workoutId = params['id'];
        this.loadWorkout();
      }
    });
  }

  loadWorkout(): void {
    const workout = this.workoutService.getWorkoutById(this.workoutId);
    if (workout) {
      this.squatWeight = workout.squat.weight;
      this.squatReps = workout.squat.reps;
      this.squatSets = workout.squat.sets;

      this.benchWeight = workout.bench.weight;
      this.benchReps = workout.bench.reps;
      this.benchSets = workout.bench.sets;

      this.deadliftWeight = workout.deadlift.weight;
      this.deadliftReps = workout.deadlift.reps;
      this.deadliftSets = workout.deadlift.sets;

      this.notes = workout.notes || '';
    }
  }

  // ✅ MÉTODO CAMBIADO A ASYNC
  async onSubmit(): Promise<void> {
    // Validación: al menos uno de los ejercicios debe estar completo
    const hasSquat = this.squatWeight > 0 && this.squatReps > 0 && this.squatSets > 0;
    const hasBench = this.benchWeight > 0 && this.benchReps > 0 && this.benchSets > 0;
    const hasDeadlift = this.deadliftWeight > 0 && this.deadliftReps > 0 && this.deadliftSets > 0;

    if (!hasSquat && !hasBench && !hasDeadlift) {
      this.showErrors = true;
      this.errorMessage = 'Debes completar al menos uno de los ejercicios';
      return;
    }

    if (this.isEditMode) {
      await this.updateWorkout();
    } else {
      await this.createWorkout();
    }
  }

  // ✅ MÉTODO CAMBIADO A ASYNC
  async createWorkout(): Promise<void> {
    await this.workoutService.createWorkout({
      userId: this.currentUserId,
      date: new Date(),
      squat: {
        weight: this.squatWeight,
        reps: this.squatReps,
        sets: this.squatSets
      },
      bench: {
        weight: this.benchWeight,
        reps: this.benchReps,
        sets: this.benchSets
      },
      deadlift: {
        weight: this.deadliftWeight,
        reps: this.deadliftReps,
        sets: this.deadliftSets
      },
      notes: this.notes
    });

    this.router.navigate(['/workouts']);
  }

  // ✅ MÉTODO CAMBIADO A ASYNC
  async updateWorkout(): Promise<void> {
    await this.workoutService.updateWorkout(this.workoutId, {
      squat: {
        weight: this.squatWeight,
        reps: this.squatReps,
        sets: this.squatSets
      },
      bench: {
        weight: this.benchWeight,
        reps: this.benchReps,
        sets: this.benchSets
      },
      deadlift: {
        weight: this.deadliftWeight,
        reps: this.deadliftReps,
        sets: this.deadliftSets
      },
      notes: this.notes
    });

    this.router.navigate(['/workouts']);
  }

  cancel(): void {
    this.router.navigate(['/workouts']);
  }
}