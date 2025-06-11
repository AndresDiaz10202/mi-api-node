### API de autenticación de usuarios (Node.js + PostgreSQL + JWT)

Este proyecto es una API RESTful desarrollada en Node.js con Express, PostgreSQL y autenticación JWT, pensada para validar conocimientos de backend en una prueba técnica. 

Cuenta con:

- Arquitectura modular con separación de responsabilidades (rutas, controladores, middlewares, validadores).
- Registro y login de usuarios con contraseñas hasheadas mediante bcrypt.
- Autenticación segura con JSON Web Tokens (JWT) y middleware de protección para rutas privadas.
- Validaciones de entrada con Joi para garantizar integridad de datos.
- Base de datos PostgreSQL conectada mediante `pg`, con Docker para facilitar entorno de desarrollo.
- Testing unitario y de integración con Jest y Supertest.
- Integración continua (CI) automatizada con GitHub Actions para ejecutar pruebas en cada push.

Además, el proyecto está preparado para escalar fácilmente, incluyendo soporte futuro para MongoDB, GraphQL y despliegue en la nube (AWS o servicios como Render o Railway).


## Scripts

```bash
npm run dev       # arranca con nodemon
npm test          # ejecuta pruebas
