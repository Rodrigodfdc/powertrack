import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, firstValueFrom } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/users';
  private currentUserSubject: BehaviorSubject<User | null>;
  public currentUser: Observable<User | null>;

  constructor(private http: HttpClient) {
    const storedUser = localStorage.getItem('powertrack-current-user');
    const user = storedUser ? JSON.parse(storedUser) : null;
    
    this.currentUserSubject = new BehaviorSubject<User | null>(user);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User | null {
    return this.currentUserSubject.value;
  }

  async login(username: string, password: string): Promise<boolean> {
    try {
      // GET a la API con filtros
      const users = await firstValueFrom(
        this.http.get<User[]>(`${this.apiUrl}?username=${username}&password=${password}`)
      );

      if (users.length > 0) {
        const user = users[0];
        localStorage.setItem('powertrack-current-user', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Error en login:', error);
      return false;
    }
  }

  async register(userData: Omit<User, 'id' | 'registeredDate'>): Promise<boolean> {
    try {
      // Verificar si el usuario ya existe
      const existingUsers = await firstValueFrom(
        this.http.get<User[]>(`${this.apiUrl}?username=${userData.username}`)
      );

      if (existingUsers.length > 0) {
        return false;
      }

      // Crear nuevo usuario
      const newUser: User = {
        ...userData,
        id: Date.now().toString(),
        registeredDate: new Date()
      };

      // POST a la API
      await firstValueFrom(this.http.post<User>(this.apiUrl, newUser));
      return true;
    } catch (error) {
      console.error('Error en registro:', error);
      return false;
    }
  }

  logout(): void {
    localStorage.removeItem('powertrack-current-user');
    this.currentUserSubject.next(null);
  }

  isLoggedIn(): boolean {
    return this.currentUserValue !== null;
  }
}