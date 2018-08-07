# Proyecto API con AdonisJs

Proyecto API server en AdonisJs, este proyecto esta preconfigurado con:

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds
6. Lucid-Mongo
7. Redis

## Intalación

Use el siguiente comando adonis para realizar la instalación de las dependencias

```bash
npm install
```

### Migrations

Ejecutar el siguiente comando para iniciar las migraciones.

```js
adonis migration:run
```
### Iniciar la aplicación

Ejecutar el siguiente comando adonis para iniciar el server con AdonisJs.

```js
adonis serve --dev
```

### Endpoints

La aplicación tiene los siguientes endpoints de prueba:

```js
1. http://127.0.0.1:3333/								GET
2. http://127.0.0.1:3333/api/v0.1/users				  GET
3. http://127.0.0.1:3333/api/v0.1/users				  POST
4. http://127.0.0.1:3333/api/v0.1/users/:id			  GET
5. http://127.0.0.1:3333/api/v0.1/users/:id              PUT
6. http://127.0.0.1:3333/api/v0.1/users/:id			  DELETE
```

