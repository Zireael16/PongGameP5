

//Variáveis Bolinha
let xBolinha = 300; 
let yBolinha = 200;
let diametroBolinha = 25;
let raio = diametroBolinha / 2

//Controle de Velocidade Bolinha
let velocidadeXBolinha = 5;
let velocidadeYBolinha = 5;

//Variáveis Retângulo
let xRetangulo = 5;
let yRetangulo = 150;
let comprimentoRetangulo = 10;
let alturaRetangulo = 120;

//Variáveis inimigo
let xRetanguloinimigo = 585;
let yRetanguloinimigo = 150;
let velociadadeYinimigo;

//Placar
let pontos = 0;
let pontosinimigo = 0;

//Efeitos Sonoros

const somPonto = new Audio('./sound/ponto.mp3');
const somColisaoRetangulo = new Audio('./sound/colisaoRetangulo.mp3')
const somFundo = new Audio ('./sound/trilha.mp3')


function setup() {
  createCanvas(600, 400);
}

function draw() {
  //Desenho inicial dos componentes no jogo
  background(0);
  desennhaBolinha();
  desenhaRetangulo(xRetangulo , yRetangulo);
  desenhaRetangulo(xRetanguloinimigo , yRetanguloinimigo);
  //Movimentação dos componentes no jogo
  movimentaBolinha();
  movimentaRetangulo();
  movimentaRetanguloinimigo();
  //Verificar as Colisões
  verificarColisao();
  verificaColisaoComRetangulo();
  verificaColisaoComRetanguloinimigo();
  //Placar
  placar();
  pontuacao(); 
  //Iniciar Música de Fundo
  somFundo.play();

}

//Funões Bolinha
function desennhaBolinha() {
  circle(xBolinha, yBolinha ,diametroBolinha)
}

function movimentaBolinha() {
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificarColisao() {
  if ( xBolinha + raio > width || xBolinha - raio < 0 ) {
    velocidadeXBolinha *= -1
    somPonto.play()
  }
  if ( yBolinha + raio > height || yBolinha - raio < 0) {
    velocidadeYBolinha *= -1
  }
}
//Funções Retângulo

function desenhaRetangulo(x, y) {
  rect (x, y , comprimentoRetangulo , alturaRetangulo)
}

function movimentaRetangulo() {
  if(keyIsDown(UP_ARROW)) {
    yRetangulo -= 7
  }
  if(keyIsDown(DOWN_ARROW)) {
    yRetangulo += 7
  }
}

function verificaColisaoComRetangulo() {
  if(xBolinha - raio < xRetangulo + comprimentoRetangulo
     && yBolinha - raio < yRetangulo + alturaRetangulo
     && yBolinha + raio > yRetangulo ) {
    velocidadeXBolinha *= -1
    somColisaoRetangulo.play();
  }
}

//Funções Retângulo inimigo
function movimentaRetanguloinimigo () {
  if(keyIsDown(87)) {
    yRetanguloinimigo -= 7
  }
  if(keyIsDown(83)) {
    yRetanguloinimigo += 7
  }
}
function verificaColisaoComRetanguloinimigo() {
  if(xBolinha + raio > xRetanguloinimigo 
    && yBolinha + raio < yRetanguloinimigo + alturaRetangulo
    && yBolinha + raio > yRetanguloinimigo){
   velocidadeXBolinha *= -1;
   somColisaoRetangulo.play();
}
}

//Placar 
function placar() {
  stroke(255);
  textSize(15);
  textAlign(CENTER)
  fill(color(70,130,180));
  rect( 150 , 10 , 40 , 20 );
  fill(255);
  text(pontos , 170 , 26);
  fill(color(178,34,34));
  rect(450 , 10 , 40 , 20);
  fill(255);
  text(pontosinimigo , 470 , 26);
}
function pontuacao() {
  if(xBolinha > 585 ) {
    pontos += 1;
  }
  if(xBolinha < 15) {
    pontosinimigo += 1
  }
}
