import * as path from "path";
import { Response } from "express";

export const EjsRender = async (res: Response, ejsFile: string, data = {}) => {
    const baseData = {
       
    };
    res.render(path.join(__dirname, "..", "pages", ejsFile + ".ejs")), Object.assign(baseData, data);
};
