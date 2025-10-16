let comidaX, comidaY;
let tamanho = 20;
let frameRateJogo = 5;

let cobra = new Cobra(20);

function setup() {
  createCanvas(400, 400);
  criarComida();
}

function draw() {
  frameRate(frameRateJogo);
  background(220);

  cobra.desenhar();
  cobra.mover();
  if (cobra.comer(comidaX, comidaY)) {
    frameRateJogo += 2;
    criarComida();
  }

  if (cobra.verificarColisao()) {
    gameOver()
  }

  desenharComida();
}

// -------------------- Funções --------------------
function desenharComida() {
  fill(255, 0, 0);
  rect(comidaX, comidaY, tamanho, tamanho);
}

function criarComida() {
  let cols = floor(width / tamanho);
  let rows = floor(height / tamanho);
  comidaX = floor(random(cols)) * tamanho;
  comidaY = floor(random(rows)) * tamanho;
}

function gameOver() {
  noLoop();
  text("Game Over!", 160, 200);
}
