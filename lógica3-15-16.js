//Programa Fidelidade
//O programa fidelidade solicitou a criação do sistema "ver meus pontos", onde o cliente consulta seu saldo seu saldo de pontos.
//O cliente digite um número inteiro correspondente aos seus cupons. 
//Cada cupom vale 1 ponto.

const ler = require("prompt-sync")(); 
let cupons = ler("Diga-me: quantos cupons você possui? ");
let pontos = cupons * 1;
console.log("Hmm.. Deixe me ver... De acordo com os cupons que possui, você tem um total de " + pontos + " saldo em pontos no programa fidelidade!"); 

//O programa fidelidade aumentou o sistema criando o "Multiplique seus pontos". 
//O cliente irá digitar quantos cupons tem e o sistema irá triplicar em pontos.

console.log("Por essa você não esperava! Agora seu cupom, vale 3 pontos!! Vamos ver quantos pontos você tem hoje? ");

cupons = ler("Olá! Diga-me: quantos cupons você possui? ");
pontos = cupons * 3;
console.log("Parabéns!! Você possui um total de " + pontos + " pontos no nosso programa fidelidade. Aproveite muito!");