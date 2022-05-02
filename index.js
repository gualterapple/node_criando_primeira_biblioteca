import chalk from 'chalk';
import fs from 'fs';

function pegaArquivo(caminho)
{
  const encoding = 'utf-8';
  fs.readFile(caminho, encoding,(_, data) => {
    console.log(chalk.green(data));
  });
}

pegaArquivo('./arquivos/texto1.md');