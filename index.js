import chalk from 'chalk';
import fs from 'fs';

function trataErro(erro){
  throw new Error(chalk.red(erro.code, 'Gualter, o arquivo não foi encontrado'));
}

function pegaArquivo(caminho)
{
  const encoding = 'utf-8';
  fs.readFile(caminho, encoding,(err, data) => {
    if(err){
      trataErro(err);
    }
    console.log(chalk.green(data));
  });
}

pegaArquivo('./arquivos/texo1.md');