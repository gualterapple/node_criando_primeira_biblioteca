import chalk from 'chalk';
import fs from 'fs';

function trataErro(erro){
  throw new Error(chalk.red(erro.code, 'Gualter, o arquivo não foi encontrado'));
}

async function pegaArquivo(caminho)
{
  const encoding = 'utf-8';
  try {
    const texto = await fs.promises.readFile(caminho, encoding);
    console.log(chalk.yellow(texto));
  } catch (error) {
    trataErro(error);
  }
}

/*function pegaArquivo(caminho)
{
  const encoding = 'utf-8';
  fs.promises.readFile(caminho, encoding)
  .then((texto) => {
    console.log(chalk.bgYellow(texto));
  })
  .catch((erro) => {
    trataErro(erro);});
}*/

/*function pegaArquivo(caminho)
{
  const encoding = 'utf-8';
  fs.readFile(caminho, encoding,(err, data) => {
    if(err){
      trataErro(err);
    }
    console.log(chalk.bgYellow(data));
  });
}*/

pegaArquivo('./arquivos/texto1.md');