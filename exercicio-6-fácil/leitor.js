//lendo arquivo de texto
//leitor.js

//TODO: importe o módulo fs
const fs = require('fs');

//TODO: Primeiro, crie o arquivo dados.txt
const conteudoInicial ='Nome: João Silva\nIdade: 25\nCidade: São Paulo\nProfissão: Desenvolvedor';

// TODO: Escreva o arquivo dados.txt
fs.writeFileSync('dados.txt', conteudoInicial );
console.log('Arquivo dados.txt criado!');

//TODO: Função para ler arquivo
function lerArquivo(){
    try{
        //TODO: Leia o arquivo usando fs.readFileSync
        const dados = fs.readFileSync('dados.txt', 'utf-8');

        console.log('===CONTEÚDO DO ARQUIVO===');
        console.log(dados);

        //TODO: Conte quantas linhas tem o arquivo
        const linhas = dados.split('\n');
        console.log(`O arquivo tem ${linhas.length} linhas.`);
    }catch(error){
        console.error('Erro ao ler arquivo:',error.message);
    }
}
// TODO: Execute a função
lerArquivo();