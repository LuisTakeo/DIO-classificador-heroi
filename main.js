class Heroi {
  nome;
  xp;
  classificacao;
  constructor(nome, xp, classificacao) {
    this.nome = nome;
    this.xp = xp;
    this.classificacao = classificacao;
  }
  getNome() {
    return this.nome;
  }
  setNome(nome) {
    this.nome = nome;
  }
  getXP() {
    return this.xp;
  }
  setXP(xp) {
    this.xp = xp;
  }
  getClassificacao() {
    return this.classificacao;
  }
  setClassificacao(classificacao) {
    this.classificacao = classificacao;
  }
}
const classificarHeroi = (heroi) => {
  const classificacao = [
    "Ferro",
    "Bronze",
    "Prata",
    "Ouro",
    "Platina",
    "Ascendente",
    "Imortal",
    "Radiante",
  ];
  const nivelXP = [1000, 2000, 5000, 7000, 8000, 9000, 10000];
  let i = 0;
  while (i < nivelXP.length) {
    if (heroi.xp <= nivelXP[i]) {
      return classificacao[i];
    }
    i++;
  }
  return classificacao[i];
};

function classificadorHeroi() {
  const prompt = require("prompt-sync")();
  let nome;
  let xp;
  let classificacao;

  nome = prompt("Digite o nome do seu herói: ");
  if (nome === "" || nome === null) {
    console.log("Nome inválido");
    return;
  }
  xp = parseInt(prompt("Digite a quantidade de experiência do seu herói: "));
  if (!Number.isInteger(xp) || xp < 0) {
    console.log("XP inválida");
    return;
  }
  const heroi = new Heroi(nome, xp, "");
  heroi.setClassificacao(classificarHeroi(heroi));
  console.log(
    `O Herói de nome ${heroi.getNome()} está no nível de ${heroi.getClassificacao()}`
  );
}

// classificadorHeroi();

module.exports = { classificadorHeroi, classificarHeroi, Heroi };
// const heroi = new Heroi("nome", 0);

// // console.log("Classificador de nível de Herói\n");
// prompt("Digite o nome do seu herói: ");

// # 1️⃣ Desafio Classificador de nível de Herói

// **O Que deve ser utilizado**

// - Variáveis
// - Operadores
// - Laços de repetição
// - Estruturas de decisões

// ## Objetivo

// Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

// Se XP for menor do que 1.000 = Ferro
// Se XP for entre 1.001 e 2.000 = Bronze
// Se XP for entre 2.001 e 5.000 = Prata
// Se XP for entre 5.001 e 7.000 = Ouro
// Se XP for entre 7.001 e 8.000 = Platina
// Se XP for entre 8.001 e 9.000 = Ascendente
// Se XP for entre 9.001 e 10.000= Imortal
// Se XP for maior ou igual a 10.001 = Radiante

// ## Saída

// Ao final deve se exibir uma mensagem:
// "O Herói de nome **{nome}** está no nível de **{nivel}**"
