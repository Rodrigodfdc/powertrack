export interface WorkoutSession {
  id: string;
  userId: string;
  date: Date;
  squat: ExerciseSet;
  bench: ExerciseSet;
  deadlift: ExerciseSet;
  notes?: string;
  isFavorite: boolean;
}

export interface ExerciseSet {
  weight: number;
  reps: number;
  sets: number;
}

export interface PersonalRecords {
  squat: number;
  bench: number;
  deadlift: number;
}