
import { Core } from "core/Core"
import { Argv } from "yargs"
import { gen } from "./Gerate"

interface Args extends Argv {
    port: number,
    printlogs: boolean,
    debug: boolean
}
/**
 * Configura o processo da aplicação
 */
export default async (args: Args) => {
    const { port = 3000, printlogs = false, debug = false } = args

    process.env.APP_PORT = port.toString()
    process.env.APP_PRINTLOGS = printlogs.toString()
    process.env.APP_DEBUG = debug.toString()
    process.env.APP_SETUP_CODE = gen(64)


    // inicia o processo
    Core()
}