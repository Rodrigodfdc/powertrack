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


🚀 Instalación en Linux (Ubuntu/Debian)
⚠️ Requisitos Previos IMPORTANTES
Angular 20 requiere:

✅ Node.js v20.19 o superior (o v22.12+)
✅ TypeScript 5.8.0 o superior


📌 PASO 1: Verificar Node.js
Primero, verifica qué versión de Node.js tienes instalada:
bashnode -v
Si la versión es menor a v20.19, sigue estos pasos para actualizar:

📌 PASO 2: Instalar/Actualizar Node.js a v20
Opción A: Usando NVM (Node Version Manager) - RECOMENDADO ⭐
NVM permite cambiar fácilmente entre versiones de Node.js.
1. Instalar NVM:
bashcurl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
2. Recargar la configuración de la terminal:
bashsource ~/.bashrc
O simplemente cierra y vuelve a abrir la terminal.
3. Instalar Node.js v20:
bashnvm install 20
4. Usar Node.js v20:
bashnvm use 20
5. Hacer v20 la versión predeterminada:
bashnvm alias default 20
6. Verificar la instalación:
bashnode -v
npm -v
Deberías ver algo como:
v20.x.x
10.x.x

Opción B: Instalación directa desde NodeSource
Si prefieres una instalación más tradicional:
1. Si ya tienes Node.js instalado, desinstálalo primero:
bashsudo apt remove nodejs npm
sudo apt autoremove
2. Añadir el repositorio de NodeSource para Node.js v20:
bashcurl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
3. Instalar Node.js v20:
bashsudo apt install -y nodejs
4. Verificar la instalación:
bashnode -v
npm -v

📌 PASO 3: Instalar Angular CLI (Opcional pero Recomendado)
bashnpm install -g @angular/cli
Verificar la instalación:
bashng version

📌 PASO 4: Clonar el Repositorio
Opción 1: Clonar desde GitHub
bashcd ~/Escritorio
git clone https://github.com/tu-usuario/powertrack.git
cd powertrack
Opción 2: Si descargaste el ZIP
bashcd ~/Escritorio
unzip powertrack-main.zip
cd powertrack-main

📌 PASO 5: Instalar Dependencias del Proyecto
Una vez dentro de la carpeta del proyecto:
bashnpm install
⏳ Este proceso puede tardar 1-3 minutos. Descargará todas las dependencias necesarias:

Angular y sus módulos
json-server para la API
TypeScript y herramientas de desarrollo
Todas las librerías del proyecto

✅ Al finalizar deberías ver: added XXX packages

📌 PASO 5.1: Actualizar TypeScript (Importante)
Angular 20 requiere TypeScript 5.8+. Si el package.json tiene una versión anterior, actualízalo:
bashnpm install typescript@5.8.3 --save-dev
Verifica la versión instalada:
bashnpx tsc --version
Debería mostrar: Version 5.8.3 o superior.

▶️ Ejecutar la Aplicación
⚠️ IMPORTANTE: La aplicación tiene 2 partes que deben ejecutarse simultáneamente:

API REST (json-server) - Puerto 3000
Aplicación Angular - Puerto 4200

Necesitas 2 terminales abiertas al mismo tiempo.

🟢 Opción A: Ejecutar API y Aplicación por Separado (Recomendado)
Esta opción te da más control y puedes ver los logs de cada proceso por separado.
Terminal 1: Iniciar la API REST
bashcd ~/Escritorio/powertrack/powertrack-main
npm run api
✅ Deberías ver algo como esto:
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
⚠️ ¡NO CIERRES ESTA TERMINAL! La API debe permanecer corriendo.

Terminal 2: Iniciar la Aplicación Angular
Abre una NUEVA terminal (Ctrl+Alt+T) y ejecuta:
bashcd ~/Escritorio/powertrack/powertrack-main
npm start
⏳ Primera compilación: Puede tardar 30-90 segundos.
✅ Deberías ver:
✔ Browser application bundle generation complete.

Initial Chunk Files | Names         |  Raw Size
polyfills.js        | polyfills     | 90.20 kB | 
main.js             | main          | 50.00 kB | 
styles.css          | styles        | 30.00 kB | 

** Angular Live Development Server is listening on localhost:4200 **

✔ Compiled successfully.

🔵 Opción B: Ejecutar Todo con Un Solo Comando
Si prefieres ejecutar ambos procesos con un solo comando:
bashnpm run dev
Este comando usa concurrently para iniciar la API y la aplicación simultáneamente en la misma terminal.
Nota: Los logs de ambos procesos aparecerán mezclados, pero funciona igual.

🌐 Acceder a la Aplicación
Una vez que ambos servidores estén corriendo:

Abre tu navegador (Chrome, Firefox, Edge, etc.)
Ve a: http://localhost:4200

La aplicación debería cargarse automáticamente.

👤 Usuarios de Prueba Disponibles
Puedes iniciar sesión con estas cuentas ya creadas:
UsuarioContraseñaDescripciónrodrigo1234Usuario con entrenamientos de ejemploadminadminUsuario administrador
O puedes crear tu propia cuenta haciendo clic en "Registrarse" desde la pantalla de login.

🛑 Detener la Aplicación
Para detener los servidores:

Ve a cada terminal donde estén corriendo
Presiona Ctrl+C
Confirma con Y si te lo pide


📡 Documentación de la API REST
La API corre en http://localhost:3000 y proporciona los siguientes endpoints:
👤 Users - Gestión de Usuarios
MétodoEndpointDescripciónEjemploGET/usersListar todos los usuarioshttp://localhost:3000/usersGET/users?username=X&password=YAutenticación (login)http://localhost:3000/users?username=rodrigo&password=1234GET/users/:idObtener usuario por IDhttp://localhost:3000/users/1POST/usersCrear nuevo usuarioBody: {"username": "...", "password": "..."}PUT/users/:idActualizar usuarioBody: {"bodyWeight": 75}DELETE/users/:idEliminar usuariohttp://localhost:3000/users/1
🏋️ Workouts - Entrenamientos
MétodoEndpointDescripciónEjemploGET/workoutsListar todos los entrenamientoshttp://localhost:3000/workoutsGET/workouts?userId=XFiltrar por usuariohttp://localhost:3000/workouts?userId=1GET/workouts/:idObtener entrenamiento por IDhttp://localhost:3000/workouts/1POST/workoutsCrear nuevo entrenamientoBody: Objeto workout completoPUT/workouts/:idActualizar entrenamientoBody: Campos a actualizarDELETE/workouts/:idEliminar entrenamientohttp://localhost:3000/workouts/1
💤 Rest Days - Días de Descanso
MétodoEndpointDescripciónGET/restDaysListar días de descansoGET/restDays?userId=XFiltrar por usuarioPOST/restDaysCrear día de descansoDELETE/restDays/:idEliminar día de descanso

📊 Estructura de Datos
User (Usuario)
json{
  "id": "1",
  "username": "rodrigo",
  "password": "1234",
  "bodyWeight": 75,
  "height": 175,
  "registeredDate": "2024-01-15T10:30:00.000Z"
}
Workout (Entrenamiento)
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
  "notes": "Buena sesión, me sentí fuerte",
  "isFavorite": true
}

📁 Estructura del Proyecto
powertrack/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── auth/
│   │   │   │   ├── login/          # Componente de login
│   │   │   │   │   ├── login.ts
│   │   │   │   │   ├── login.html
│   │   │   │   │   └── login.css
│   │   │   │   └── register/       # Componente de registro
│   │   │   │       ├── register.ts
│   │   │   │       ├── register.html
│   │   │   │       └── register.css
│   │   │   ├── home/               # Dashboard principal
│   │   │   │   ├── home.ts
│   │   │   │   ├── home.html
│   │   │   │   └── home.css
│   │   │   ├── welcome/            # Pantalla de bienvenida
│   │   │   ├── workouts/
│   │   │   │   ├── workout-form/   # Crear/Editar entrenamiento
│   │   │   │   │   ├── workout-form.ts
│   │   │   │   │   ├── workout-form.html
│   │   │   │   │   └── workout-form.css
│   │   │   │   └── workout-list/   # Lista de entrenamientos
│   │   │   │       ├── workout-list.ts
│   │   │   │       ├── workout-list.html
│   │   │   │       └── workout-list.css
│   │   │   └── rest-days/          # Gestión de días de descanso
│   │   ├── services/
│   │   │   ├── auth.ts             # Servicio de autenticación (HttpClient)
│   │   │   └── workout.ts          # Servicio de entrenamientos (HttpClient)
│   │   ├── models/
│   │   │   ├── user.model.ts       # Interfaz de Usuario
│   │   │   └── workout.model.ts    # Interfaz de Entrenamiento
│   │   ├── guards/
│   │   │   └── auth-guard.ts       # Protección de rutas privadas
│   │   ├── pipes/                  # Pipes personalizados (si hay)
│   │   ├── app.routes.ts           # Configuración de rutas
│   │   ├── app.config.ts           # Configuración de la aplicación
│   │   ├── app.ts                  # Componente raíz
│   │   └── app.html                # Template raíz
│   ├── assets/
│   │   └── toro.png                # Logo de la aplicación
│   ├── index.html                  # HTML principal
│   ├── main.ts                     # Punto de entrada
│   └── styles.css                  # Estilos globales
├── db.json                         # Base de datos JSON (API)
├── package.json                    # Dependencias y scripts
├── package-lock.json               # Versiones exactas de dependencias
├── tsconfig.json                   # Configuración de TypeScript
├── angular.json                    # Configuración de Angular
└── README.md                       # Este archivo

🎯 Funcionalidades Principales
🔐 Sistema de Autenticación

✅ Login con validación de credenciales
✅ Registro de nuevos usuarios con validaciones:

Todos los campos obligatorios
Contraseñas deben coincidir
Mínimo 4 caracteres en la contraseña
Verificación de usuario único


✅ Protección de rutas mediante AuthGuard
✅ Persistencia de sesión con localStorage
✅ Logout con limpieza de sesión

🏋️ Gestión de Entrenamientos

✅ Crear nuevas sesiones de entrenamiento
✅ Editar entrenamientos existentes
✅ Eliminar entrenamientos con confirmación
✅ Marcar como favorito ⭐ para acceso rápido
✅ Filtrar entrenamientos por favoritos
✅ Cálculo automático de volumen total (peso × reps × sets)
✅ Validación: Al menos un ejercicio debe estar completo

📊 Dashboard (Home)

✅ Total de entrenamientos registrados
✅ Entrenamientos de esta semana
✅ Récords personales por cada ejercicio
✅ Últimas 5 sesiones con detalles
✅ Navegación rápida a crear nuevo entrenamiento


🗂️ Sistema de Rutas
RutaComponenteProtegidaDescripción/-❌ NoRedirige a /login/loginLoginComponent❌ NoPantalla de inicio de sesión/registerRegisterComponent❌ NoRegistro de nuevos usuarios/welcomeWelcomeComponent✅ SíPantalla de bienvenida tras login/homeHomeComponent✅ SíDashboard principal con estadísticas/workoutsWorkoutListComponent✅ SíLista de todos los entrenamientos/workout/newWorkoutFormComponent✅ SíCrear nuevo entrenamiento/workout/edit/:idWorkoutFormComponent✅ SíEditar entrenamiento existente/rest-daysRestDaysComponent✅ SíGestión de días de descanso/**-❌ NoCualquier ruta no válida redirige a /login
Rutas protegidas: Requieren que el usuario esté autenticado. Si no lo está, el AuthGuard redirige automáticamente a /login.

🐛 Solución de Problemas Comunes
❌ Error: "Node.js version v18.19.1 detected. The Angular CLI requires a minimum Node.js version of v20.19"
Causa: Tu versión de Node.js es anterior a la requerida.
Solución: Actualiza Node.js siguiendo la sección "PASO 2" de este README.

❌ Error: "The Angular Compiler requires TypeScript >=5.8.0 but 5.6.3 was found"
Causa: El proyecto tiene una versión de TypeScript anterior a la requerida.
Solución:
bashnpm install typescript@5.8.3 --save-dev
Si el error persiste:
bash# Limpiar e reinstalar
rm -rf node_modules package-lock.json
npm install
npm install typescript@5.8.3 --save-dev
Nota: También puedes editar package.json y cambiar:
json"typescript": "~5.6.2"
Por:
json"typescript": "~5.8.3"

❌ Error: "Cannot GET /workouts" o "ERR_CONNECTION_REFUSED" en el navegador
Causa: El servidor de la API no está corriendo.
Solución:
bashnpm run api
Asegúrate de que la terminal muestre JSON Server started on PORT :3000.

❌ Error: "Port 3000 is already in use"
Causa: Ya hay otro proceso usando el puerto 3000.
Solución 1 - Encontrar y detener el proceso:
bash# Ver qué proceso está usando el puerto 3000
sudo lsof -i :3000

# Matar el proceso (reemplaza PID con el número que aparece)
kill -9 PID
Solución 2 - Usar otro puerto:

Edita package.json, línea de "api":

json"api": "json-server --watch db.json --port 3001"

Actualiza las URLs en los servicios:

src/app/services/auth.ts
src/app/services/workout.ts

Cambia:

typescript   private apiUrl = 'http://localhost:3000/...';
Por:
typescript   private apiUrl = 'http://localhost:3001/...';

❌ Error: "Port 4200 is already in use"
Causa: Ya hay una instancia de Angular corriendo.
Solución: Usa otro puerto:
bashng serve --port 4201
Luego accede en: http://localhost:4201

❌ Error: "npm: command not found"
Causa: npm no está instalado.
Solución:
bashsudo apt update
sudo apt install npm

❌ Error: "ng: command not found"
Solución 1 - Instalar Angular CLI globalmente:
bashnpm install -g @angular/cli
Solución 2 - Usar npx (sin instalar globalmente):
bashnpx ng serve

❌ La aplicación carga pero no muestra datos / No puedo hacer login
Verificaciones:

¿Está el servidor API corriendo?

bash   # En otra terminal, prueba:
   curl http://localhost:3000/users
Debería devolver un JSON con usuarios.

¿Existe el archivo db.json en la raíz del proyecto?

bash   ls -la db.json

¿Las URLs en los servicios son correctas?

Abre src/app/services/auth.ts
Verifica: private apiUrl = 'http://localhost:3000/users';


Revisa la consola del navegador (F12) para ver si hay errores.


❌ Error: "ERESOLVE unable to resolve dependency tree"
Causa: Conflicto de versiones de dependencias.
Solución:
bash# Eliminar node_modules y package-lock
rm -rf node_modules package-lock.json

# Limpiar caché
npm cache clean --force

# Reinstalar con flag especial
npm install --legacy-peer-deps

❌ Error: "json-server: command not found"
Causa: json-server no se instaló correctamente.
Solución 1 - Reinstalar dependencias:
bashnpm install
Solución 2 - Instalar json-server globalmente:
bashsudo npm install -g json-server
Luego ejecuta directamente:
bashjson-server --watch db.json --port 3000

🔧 Scripts npm Disponibles
ComandoDescripciónUsonpm startInicia la aplicación Angular en modo desarrolloPuerto 4200npm run apiInicia el servidor json-server para la APIPuerto 3000npm run devInicia API y aplicación simultáneamenteAmbos puertosnpm run buildCompila la aplicación para producciónGenera carpeta dist/npm testEjecuta los tests unitarios con KarmaModo interactivonpm run watchCompila en modo watch (detecta cambios)Para desarrollo

🎨 Características Técnicas Implementadas
Angular Features

✅ Standalone Components (Angular 20)
✅ Template-driven Forms con FormsModule
✅ Two-way Data Binding con [(ngModel)]
✅ Event Binding con (click), (submit), (change)
✅ Property Binding con [ngClass], [ngIf]
✅ Interpolation con {{ }}
✅ Structural Directives: *ngIf, *ngFor, *ngIf-else
✅ Built-in Pipes: date, uppercase
✅ HttpClient para comunicación con API
✅ Router con navegación programática
✅ Route Parameters (:id para edición)
✅ Route Guards (AuthGuard con CanActivate)

Patterns & Best Practices

✅ Reactive Programming con RxJS
✅ BehaviorSubject para estado global
✅ Observable patterns para reactividad
✅ Dependency Injection en constructores
✅ Separation of Concerns (Models, Services, Components, Guards)
✅ async/await con firstValueFrom para Promises
✅ LocalStorage para persistencia de sesión
✅ Validaciones custom en TypeScript
✅ Error handling con try-catch

API Integration

✅ RESTful API con json-server
✅ CRUD completo: GET, POST, PUT, DELETE
✅ Query params para filtrado (?userId=X)
✅ Manejo de respuestas HTTP
✅ Estado local sincronizado con API


📝 Notas Importantes
⚠️ Sobre el Backend
Esta aplicación usa json-server como backend de desarrollo. Es una solución rápida y práctica para prototipos y desarrollo, pero NO es adecuada para producción.
🚀 Para llevar a Producción:
Necesitarías implementar:

Backend real:

Node.js + Express
NestJS
Spring Boot (Java)
Django/FastAPI (Python)


Base de datos real:

PostgreSQL
MySQL
MongoDB


Seguridad:

Autenticación JWT
HTTPS
Validaciones del lado del servidor
Protección CORS
Rate limiting


Infraestructura:

Hosting (AWS, Azure, DigitalOcean)
CI/CD pipeline
Monitoreo y logs
Backups




🧪 Testing
Para ejecutar los tests unitarios:
bashnpm test
Esto iniciará Karma y abrirá una ventana del navegador con los resultados.

🏗️ Build para Producción
Para generar una versión optimizada para producción:
bashnpm run build
Los archivos compilados se generarán en dist/powertrack/.
Para probar el build de producción:
bash# Instalar un servidor HTTP simple
npm install -g http-server

# Servir la carpeta dist
cd dist/powertrack
http-server

👤 Autor
Rodrigo de freitas da cruz

GitHub: @Rodrigodfdc
LinkedIn: https://www.linkedin.com/in/rodrigo-de-freitas-da-cruz-307366184/)
Email: rodrigodfdc1995@gmail.com


📄 Licencia
Este proyecto es de código abierto y está disponible bajo la Licencia MIT.

🙏 Agradecimientos

Proyecto desarrollado como evaluación final para el curso de Desarrollo de Aplicaciones Web con Angular
Inspirado en la necesidad de atletas de powerlifting de llevar un registro de sus entrenamientos
Gracias a la comunidad de Angular por la excelente documentación


📚 Recursos Adicionales

Documentación Oficial de Angular
json-server GitHub
RxJS Documentation
TypeScript Handbook


💪 ¡Feliz entrenamiento con PowerTrack! 🏋️
¿Preguntas o problemas? Abre un issue en GitHub
