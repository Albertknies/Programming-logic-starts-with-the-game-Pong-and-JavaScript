//variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro / 2;

//velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//variavéis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let raqueteOponenteComprimento = 10;
let raqueteOponenteAltura = 90;
let velocidadeYOponente;

//Placar do Jogo
let meusPontos = 0;
let pontosDoOponente = 0;

//Sons do jogo
let raquetada;
let ponto;
let trilha;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  movimentaMinhaRaquete();
  verificaColisaoRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  incluiPlacar();
  marcaPonto();
  bolinhaNãoFicaPresa();
}

function mostraBolinha() {
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha() {
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda() {
  if (xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio > height || yBolinha - raio < 0) {
    velocidadeYBolinha *= -1;
  }
}
function mostraRaquete(x, y) {
  rect(x, y, raqueteComprimento, raqueteAltura);
}
function movimentaMinhaRaquete() {
  if (keyIsDown(UP_ARROW)) {
    yRaquete -= 5;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yRaquete += 5;
  }
}
function verificaColisaoRaquete(x, y) {
  if (
    xBolinha - raio < x + raqueteComprimento &&
    xBolinha + raio > x &&
    yBolinha - raio < y + raqueteAltura &&
    yBolinha + raio > y
  ) {
    velocidadeXBolinha *= -1;
  }
}
function movimentaRaqueteOponente() {
  velocidadeYOponente =
    yBolinha - yRaqueteOponente - raqueteComprimento / 2 - 80;
  yRaqueteOponente += velocidadeYOponente;
}
function incluiPlacar() {
  textAlign(CENTER), textSize(18);
  fill(color(255, 140, 0));
  rect(130, 10, 40, 20);
  fill(255);
  text(meusPontos, 150, 26);
  fill(color(255, 140, 0));
  text("x", 300, 26);
  fill(color(255, 140, 0));
  rect(430, 10, 40, 20);
  fill(255);
  text(pontosDoOponente, 450, 26);
}
function marcaPonto() {
  if (xBolinha > 590) {
    meusPontos += 1;
  }
  if (xBolinha < 10) {
    pontosDoOponente += 1;
  }
}

function bolinhaNãoFicaPresa() {
  if (xBolinha - raio < 0) {
    xBolinha = 23;
  }
}
