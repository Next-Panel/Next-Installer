import yargs from 'yargs';
import ServerSet from "utils/Configuration"

const args:any = yargs
  .option('port', {
    description: 'Porta que vai ser ouvida pelo servidor',
    alias: 'p',
    type: 'number',
  })
  .option('debug', {
    description: 'Ativa o modo debug do projeto',
    type: 'boolean',
    default: false,
  })
  .option('printlogs', {
    description: 'armazena logs em um arquivo.',
    type: 'boolean',
    default: false,
  })
  .help()
  .argv;

// Inicia o configurador do codigo
ServerSet(args);
