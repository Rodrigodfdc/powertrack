import { Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login';
import { RegisterComponent } from './components/auth/register/register';
import { WelcomeComponent } from './components/welcome/welcome';
import { HomeComponent } from './components/home/home';
import { WorkoutListComponent } from './components/workouts/workout-list/workout-list';
import { WorkoutFormComponent } from './components/workouts/workout-form/workout-form';
import { AuthGuard } from './guards/auth-guard';
import { RestDaysComponent } from './components/rest-days/rest-days';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  
  // Rutas protegidas con AuthGuard
  { path: 'welcome', component: WelcomeComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'workouts', component: WorkoutListComponent, canActivate: [AuthGuard] },
  { path: 'workout/new', component: WorkoutFormComponent, canActivate: [AuthGuard] },
  { path: 'workout/edit/:id', component: WorkoutFormComponent, canActivate: [AuthGuard] },
  { path: 'rest-days', component: RestDaysComponent, canActivate: [AuthGuard] },
  
  // Ruta wildcard para 404
  { path: '**', redirectTo: '/login' }
];