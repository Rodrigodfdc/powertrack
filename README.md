💪 PowerTrack
Aplicación web para gestión de entrenamientos de Powerlifting
Desarrollada con Angular 20 y json-server como API REST simulada.

📋 Descripción
PowerTrack es una aplicación completa para atletas de powerlifting que permite:

✅ Registrar y gestionar sesiones de entrenamiento
✅ Seguimiento de los 3 ejercicios principales: Sentadilla, Press Banca y Peso Muerto
✅ Visualización de récords personales y estadísticas
✅ Sistema de autenticación con login y registro
✅ Marcado de entrenamientos favoritos
✅ Filtrado y búsqueda de sesiones
✅ Cálculo automático de volumen de entrenamiento


🛠️ Tecnologías Utilizadas
Frontend

Angular 20.3.0 (Standalone Components)
TypeScript 5.6.2
RxJS 7.8.0 (Programación Reactiva)
Angular Router (Navegación)
Angular Forms (Template-driven Forms)
HttpClient (Comunicación con API)

Backend (Simulado)

json-server 1.0.0-beta.3 (API REST simulada)
concurrently 9.1.0 (Ejecución paralela de procesos)

DevTools

Angular CLI 20.3.10
Jasmine + Karma (Testing)


📁 Estructura del Proyecto
powertrack/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── auth/
│   │   │   │   ├── login/          # Componente de login
│   │   │   │   └── register/       # Componente de registro
│   │   │   ├── home/               # Dashboard principal
│   │   │   ├── welcome/            # Pantalla de bienvenida
│   │   │   ├── workouts/
│   │   │   │   ├── workout-form/   # Formulario crear/editar
│   │   │   │   └── workout-list/   # Lista de entrenamientos
│   │   │   └── rest-days/          # Días de descanso
│   │   ├── services/
│   │   │   ├── auth.ts             # Servicio de autenticación
│   │   │   └── workout.ts          # Servicio de entrenamientos
│   │   ├── models/
│   │   │   ├── user.model.ts       # Modelo de Usuario
│   │   │   └── workout.model.ts    # Modelo de Entrenamiento
│   │   ├── guards/
│   │   │   └── auth-guard.ts       # Protección de rutas
│   │   ├── app.routes.ts           # Configuración de rutas
│   │   ├── app.config.ts           # Configuración de la app
│   │   └── app.ts                  # Componente raíz
│   ├── assets/                     # Recursos estáticos
│   └── index.html
├── db.json                         # Base de datos JSON (API)
├── package.json
└── README.md

🚀 Instalación y Ejecución
Prerrequisitos

Node.js (versión 18 o superior)
npm (incluido con Node.js)
Angular CLI (opcional, pero recomendado)

bashnpm install -g @angular/cli
1. Clonar el repositorio
bashgit clone https://github.com/tu-usuario/powertrack.git
cd powertrack
2. Instalar dependencias
bashnpm install
3. ⚠️ IMPORTANTE: Iniciar la API REST (Terminal 1)
Antes de iniciar la aplicación Angular, debes levantar el servidor de la API:
bashnpm run api
✅ Verifica que aparezca este mensaje:
JSON Server started on PORT :3000
Press CTRL-C to stop
Watching db.json...

( ˶ˆ ᗜ ˆ˵ )

Index:
http://localhost:3000/

Endpoints:
http://localhost:3000/users
http://localhost:3000/workouts
http://localhost:3000/restDays
⚠️ Esta terminal debe permanecer abierta mientras uses la aplicación.
4. Iniciar la aplicación Angular (Terminal 2)
En una NUEVA terminal (sin cerrar la anterior):
bashnpm start
✅ La aplicación estará disponible en: http://localhost:4200
5. Acceder a la aplicación
Abre tu navegador en http://localhost:4200
Usuarios de prueba disponibles:
UsuarioContraseñarodrigo1234adminadmin
O regístrate con tu propia cuenta.

🔥 Método Alternativo: Iniciar TODO de una vez
Si prefieres iniciar la API y la aplicación con un solo comando:
bashnpm run dev
Este comando ejecuta concurrently que inicia ambos procesos en paralelo.

📡 API REST - Endpoints Disponibles
La API REST corre en http://localhost:3000 y tiene los siguientes endpoints:
Users (/users)
MétodoEndpointDescripciónGET/usersObtener todos los usuariosGET/users?username=X&password=YLogin (buscar por credenciales)GET/users/:idObtener usuario por IDPOST/usersCrear nuevo usuarioPUT/users/:idActualizar usuarioDELETE/users/:idEliminar usuario
Workouts (/workouts)
MétodoEndpointDescripciónGET/workoutsObtener todos los entrenamientosGET/workouts?userId=XFiltrar por usuarioGET/workouts/:idObtener entrenamiento por IDPOST/workoutsCrear nuevo entrenamientoPUT/workouts/:idActualizar entrenamientoDELETE/workouts/:idEliminar entrenamiento
Rest Days (/restDays)
MétodoEndpointDescripciónGET/restDaysObtener todos los días de descansoGET/restDays?userId=XFiltrar por usuarioPOST/restDaysCrear día de descansoDELETE/restDays/:idEliminar día de descanso

📊 Estructura de Datos (db.json)
User
json{
  "id": "1",
  "username": "rodrigo",
  "password": "1234",
  "bodyWeight": 75,
  "height": 175,
  "registeredDate": "2024-01-15T10:30:00.000Z"
}
Workout
json{
  "id": "1",
  "userId": "1",
  "date": "2024-11-20T10:00:00.000Z",
  "squat": {
    "weight": 100,
    "reps": 5,
    "sets": 3
  },
  "bench": {
    "weight": 80,
    "reps": 5,
    "sets": 3
  },
  "deadlift": {
    "weight": 120,
    "reps": 3,
    "sets": 3
  },
  "notes": "Buena sesión",
  "isFavorite": true
}

🎯 Funcionalidades Principales
🔐 Autenticación

Login con validación de credenciales
Registro de nuevos usuarios con validaciones
Protección de rutas mediante AuthGuard
Persistencia de sesión con localStorage
Logout con limpieza de sesión

🏋️ Gestión de Entrenamientos

Crear nuevas sesiones de entrenamiento
Editar entrenamientos existentes
Eliminar entrenamientos con confirmación
Marcar como favorito para acceso rápido
Filtrar por favoritos
Calcular volumen total automáticamente

📊 Dashboard

Estadísticas generales: total de entrenamientos
Estadísticas semanales: entrenamientos de esta semana
Récords personales por ejercicio
Últimas 5 sesiones registradas


🗂️ Routing
RutaComponenteProtegidaDescripción/-NoRedirige a /login/loginLoginComponentNoPantalla de login/registerRegisterComponentNoRegistro de usuario/welcomeWelcomeComponent✅ SíBienvenida post-login/homeHomeComponent✅ SíDashboard principal/workoutsWorkoutListComponent✅ SíLista de entrenamientos/workout/newWorkoutFormComponent✅ SíCrear entrenamiento/workout/edit/:idWorkoutFormComponent✅ SíEditar entrenamiento/rest-daysRestDaysComponent✅ SíDías de descanso

🧪 Testing
Ejecutar tests unitarios:
bashnpm test

🏗️ Build para Producción
Generar build optimizado:
bashnpm run build
Los archivos se generarán en el directorio dist/.

🔧 Scripts Disponibles
ComandoDescripciónnpm startInicia la aplicación Angular (puerto 4200)npm run apiInicia el servidor JSON (puerto 3000)npm run devInicia API y aplicación simultáneamentenpm run buildBuild de producciónnpm testEjecuta tests unitariosnpm run watchBuild en modo watch

🎨 Características Técnicas
Architecture Patterns

✅ Standalone Components (Angular 20)
✅ Reactive Programming con RxJS (BehaviorSubjects)
✅ Dependency Injection para servicios
✅ Separation of Concerns (Models, Services, Components, Guards)
✅ Route Guards para seguridad

Angular Features

✅ Template-driven Forms con validaciones
✅ Two-way Data Binding [(ngModel)]
✅ Event Binding (click, submit, change)
✅ Property Binding [ngClass], [ngIf]
✅ Structural Directives (*ngIf, *ngFor, *ngIf-else)
✅ Pipes (date, uppercase, custom)
✅ HttpClient con async/await
✅ Router con parámetros dinámicos

State Management

✅ BehaviorSubject para estado global
✅ Observable patterns para reactividad
✅ LocalStorage para persistencia


🐛 Troubleshooting
Error: "Cannot GET /workouts"
Solución: Asegúrate de que el servidor JSON esté corriendo:
bashnpm run api
Error: Puerto 3000 en uso
Solución: Cambia el puerto en package.json:
json"api": "json-server --watch db.json --port 3001"
Error: Puerto 4200 en uso
Solución: Usa otro puerto para Angular:
bashng serve --port 4201
La aplicación no carga datos
Solución: Verifica que:

El servidor JSON esté corriendo (npm run api)
La URL de la API sea correcta en los servicios (http://localhost:3000)
El archivo db.json exista en la raíz del proyecto


📝 Notas Importantes
⚠️ Esta aplicación usa json-server, que es solo para desarrollo.
Para producción, se recomienda:

Usar un backend real (Node.js + Express, NestJS, Spring Boot, etc.)
Implementar autenticación JWT
Añadir validaciones del lado del servidor
Usar una base de datos real (PostgreSQL, MongoDB, etc.)
Implementar HTTPS


👤 Autor
Rodrigo de Freitas da Cruz

GitHub: https://github.com/Rodrigodfdc)
Email: rodrigodfdc1995@gmail.com


📄 Licencia
Este proyecto es de código abierto y está disponible bajo la licencia MIT.

🙏 Agradecimientos
Proyecto desarrollado como evaluación final para el curso de Ampliación de interfaces.

💪 ¡Feliz entrenamiento con PowerTrack! 🏋️