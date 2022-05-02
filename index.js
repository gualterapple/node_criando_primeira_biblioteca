import chalk from 'chalk';

const paragrafo = 'Texto retornado por uma função';

function texto(string) {
  return string;
}

console.log(chalk.blue(texto(paragrafo)));
