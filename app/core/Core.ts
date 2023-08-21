import express from 'express';
import http from 'http';
import Router from 'router/Router';
import { Socket } from "socket/Sockets"
const app = express();
const server = http.createServer(app);
export function Core() {
    // Inicia o Controlador das Rotas
    Router(app)

    // Inicia o Controlador dos Sockets
    Socket(server);

    server.listen(process.env.APP_PORT, () => {
        console.log(`Servidor iniciado em : http://localhost:${process.env.APP_PORT}/setup/${process.env.APP_SETUP_CODE}`);
    });
}