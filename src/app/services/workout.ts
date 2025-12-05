import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, firstValueFrom } from 'rxjs';
import { WorkoutSession } from '../models/workout.model';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  private apiUrl = 'http://localhost:3000/workouts';
  private workoutsSubject: BehaviorSubject<WorkoutSession[]>;
  public workouts: Observable<WorkoutSession[]>;

  constructor(private http: HttpClient) {
    this.workoutsSubject = new BehaviorSubject<WorkoutSession[]>([]);
    this.workouts = this.workoutsSubject.asObservable();
    this.loadWorkoutsFromAPI();
  }

  // Cargar entrenamientos desde la API
  private async loadWorkoutsFromAPI(): Promise<void> {
    try {
      const workouts = await firstValueFrom(this.http.get<WorkoutSession[]>(this.apiUrl));
      this.workoutsSubject.next(workouts);
    } catch (error) {
      console.error('Error al cargar entrenamientos:', error);
      this.workoutsSubject.next([]);
    }
  }

  getWorkoutsByUser(userId: string): WorkoutSession[] {
    return this.workoutsSubject.value.filter(w => w.userId === userId);
  }

  getWorkoutById(id: string): WorkoutSession | undefined {
    return this.workoutsSubject.value.find(w => w.id === id);
  }

  async createWorkout(workout: Omit<WorkoutSession, 'id' | 'isFavorite'>): Promise<void> {
    const newWorkout: WorkoutSession = {
      ...workout,
      id: Date.now().toString(),
      isFavorite: false
    };

    try {
      // POST a la API
      await firstValueFrom(this.http.post<WorkoutSession>(this.apiUrl, newWorkout));
      
      // Actualizar lista local
      const updatedWorkouts = [...this.workoutsSubject.value, newWorkout];
      this.workoutsSubject.next(updatedWorkouts);
    } catch (error) {
      console.error('Error al crear entrenamiento:', error);
    }
  }

  async updateWorkout(id: string, updates: Partial<WorkoutSession>): Promise<void> {
    const workout = this.getWorkoutById(id);
    if (!workout) return;

    const updatedWorkout = { ...workout, ...updates };

    try {
      // PUT a la API
      await firstValueFrom(
        this.http.put<WorkoutSession>(`${this.apiUrl}/${id}`, updatedWorkout)
      );

      // Actualizar lista local
      const workouts = this.workoutsSubject.value;
      const index = workouts.findIndex(w => w.id === id);
      if (index !== -1) {
        workouts[index] = updatedWorkout;
        this.workoutsSubject.next([...workouts]);
      }
    } catch (error) {
      console.error('Error al actualizar entrenamiento:', error);
    }
  }

  async deleteWorkout(id: string): Promise<void> {
    try {
      // DELETE de la API
      await firstValueFrom(this.http.delete(`${this.apiUrl}/${id}`));

      // Actualizar lista local
      const updatedWorkouts = this.workoutsSubject.value.filter(w => w.id !== id);
      this.workoutsSubject.next(updatedWorkouts);
    } catch (error) {
      console.error('Error al eliminar entrenamiento:', error);
    }
  }

  async toggleFavorite(id: string): Promise<void> {
    const workout = this.getWorkoutById(id);
    if (workout) {
      await this.updateWorkout(id, { isFavorite: !workout.isFavorite });
    }
  }

  getPersonalRecords(userId: string): { exercise: string; weight: number }[] {
    const userWorkouts = this.getWorkoutsByUser(userId);
    
    if (userWorkouts.length === 0) return [];

    const maxSquat = Math.max(...userWorkouts.map(w => w.squat.weight));
    const maxBench = Math.max(...userWorkouts.map(w => w.bench.weight));
    const maxDeadlift = Math.max(...userWorkouts.map(w => w.deadlift.weight));

    return [
      { exercise: 'Sentadilla', weight: maxSquat },
      { exercise: 'Press Banca', weight: maxBench },
      { exercise: 'Peso Muerto', weight: maxDeadlift }
    ];
  }

  getStats(userId: string): { total: number; thisWeek: number } {
    const userWorkouts = this.getWorkoutsByUser(userId);
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);

    const thisWeek = userWorkouts.filter(w => new Date(w.date) >= weekAgo).length;

    return {
      total: userWorkouts.length,
      thisWeek
    };
  }
}
