# Chat API - Trabajo Final Node.js

API REST desarrollada con Node.js, Express y MongoDB para gestión de usuarios, chats y mensajes. CON DEPLOY EN RENDER

## Tecnologías utilizadas

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- dotenv

## Como abrir

npm install
npm run dev


## Endpoints
## Usuarios
- GET /users
- POST /users
- DELETE /users/:id

### Chats

- GET /chats
- POST /chats
- DELETE /chats/:id

### Messages

- GET /meessages
- POST /messages
- DELETE /messages/:id

## Ejemplo request
DEPLOY EN RENDER
![DEPLOY](./src/capturas/deployenrender.png)

POST /users

```json
{
  "username": "Andy",
  "email": "andy@gmail.com"
}
Andy fue eliminado y actualmente existe el siguiente usuario que
se usó para unir todo, tanto como id de mensaje y usuario formando un chat
```

![POST](./src/capturas/post.png)
![GET](./src/capturas/get.png)
![DELETE](./src/capturas/delete.png)
![CHAT POST](./src/capturas/chatpost.png)


```json
{
  "username": "Emiliano",
  "email": "emi@gmail.com"
}
```

![CHAT](./src/capturas/mensaje.png)
