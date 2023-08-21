import { EjsRender } from "utils/EJSRender";
import { Application, Request, Response } from "express";
import { connectedUser } from "socket/namespace/Installer";

/**
 * ### Controlador de rotas do painel
 * 
 * Aqui terão outras rotas e middlewares usados pelo sistema.
 */
export default async (app: Application) => {
    app.get("/setup/:id", async (req: Request, res: Response) => {
        const setupID = req.params.id
        if(setupID === process.env.APP_SETUP_CODE) {
            if(connectedUser !== null) {
                await EjsRender(res, "errors/maxUsers")
            }
            await EjsRender(res, "setup")
        } else {
            await EjsRender(res, "errors/invalidcode")
        }
    })
}