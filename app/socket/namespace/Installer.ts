import { Server, Socket } from "socket.io";

/**
 * Limita acesso do socket a apenas um
 */
export let connectedUser: string | null = null;

/**
 * ### Socket operador da instalação
 * 
 * namespace: /installer
 */
export default (io: Server): void => {
    const Server = io.of("/installer");
    Server.on('connection', (socket) => {
        if (connectedUser !== null) {
            socket.emit('connectionRejected', 'Outro usuário ja esta conectado ao serviço de instalação.');
            socket.disconnect(true);
        } else {
            connectedUser = socket.id;

            socket.on('disconnect', () => {
                if (socket.id === connectedUser) {
                    connectedUser = null;
                }
            });

            socket.emit('connected', 'Agora você está conectado.');
        }
    });
}
