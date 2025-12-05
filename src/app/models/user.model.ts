export interface User {
  id: string;
  username: string;
  password: string;
  bodyWeight: number;    // Peso corporal en kg
  height: number;        // Altura en cm
  registeredDate: Date;
}