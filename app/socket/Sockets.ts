import { Server } from "socket.io";
import { Server as HTTPServer } from "http"
import Installer from "socket/namespace/Installer";
/**
 * ### Configurações do sockets usados
 * 
 * @param server Server HTTP
 */

export async function Socket(server: HTTPServer) {
    const io = new Server(server);

    Installer(io)
}
