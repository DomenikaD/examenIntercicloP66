# examenIntercicloP66

# REPOSITORIO DE ANGULAR
[https://github.com/DomenikaD/examenInterciclo66-angular](https://github.com/DomenikaD/examenInterciclo66-angular)

## Estructura del proyecto

* /client: Código fuente de la aplicación Angular.
* /server: Código del servidor WebSocket en Node.js.
* docker-compose.yml: Archivo para levantar ambos servicios.

---
## Construir las imagenes
 
En esta parte debemos contruir las imagenes a partir de un dockerfile en cada uno de nuestros proyectos

Para eso debemos ejecutar los siguientes comandos 

*Angular Cliente y Node servidor*

```bash
docker build -t <userName>/<imageName> .
```

## Instrucciones para construir y ejecutar desde un docker compose

1. Clona el repositorio:

```bash
git clone [https://github.com/DomenikaD/examenIntercicloP66](https://github.com/DomenikaD/examenIntercicloP66)
cd servidorWebSockets
```

```bash
git clone [https://github.com/DomenikaD/examenInterciclo66-angular](https://github.com/DomenikaD/examenInterciclo66-angular)
cd interfazWeb
```


2. Construye y levanta los contenedores con Docker Compose:

```bash
docker-compose up --build
```

3. Abre tu navegador y visita:


http://localhost:4200


Se debería ver la aplicación Angular mostrando un mensaje de bienvenida y mensajes dinámicos que llegan en tiempo real desde el servidor WebSocket.

---

## Archivos

* *docker-compose.yml*: Define los servicios frontend (Angular) y websocket (Node.js).

* *interfazWeb/Dockerfile*: Construye la app Angular y la sirve con Apache.

* *servidorWebSockets/Dockerfile*: Construye el servidor Node.js con WebSocket.

---

## Publicación en Docker Hub

* La imagen del servidor WebSocket está publicada en Docker Hub en la cuenta <tu_usuario_dockerhub>/websocket-server.

* La imagen de Angular está publicada en Docker Hub en <tu_usuario_dockerhub>/angular-frontend.

---

## Comandos

* Levantar los servicios en segundo plano:

```bash
docker-compose up -d --build
```

* Ver logs del servidor WebSocket:

```bash
docker-compose logs -f websocket
```

* Detener y eliminar contenedores:

```bash
docker-compose down
```
