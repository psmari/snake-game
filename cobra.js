class Cobra {
  constructor(tamanho) {
    this.tamanho = tamanho;
    this.corpo = [];

    for (let i = 0; i < 3; i++) {
      this.corpo.push({ x: 200 - i * tamanho, y: 200 });
    }

    this.direcao = "RIGHT";
  }

  mover() {
    if (keyIsDown(LEFT_ARROW) && this.direcao !== "RIGHT") this.direcao = "LEFT";
    if (keyIsDown(RIGHT_ARROW) && this.direcao !== "LEFT") this.direcao = "RIGHT";
    if (keyIsDown(UP_ARROW) && this.direcao !== "DOWN") this.direcao = "UP";
    if (keyIsDown(DOWN_ARROW) && this.direcao !== "UP") this.direcao = "DOWN";

    let head = {
      x: this.corpo[0].x,
      y: this.corpo[0].y
    };

    if (this.direcao === "LEFT") head.x -= this.tamanho;
    if (this.direcao === "RIGHT") head.x += this.tamanho;
    if (this.direcao === "UP") head.y -= this.tamanho;
    if (this.direcao === "DOWN") head.y += this.tamanho;

    this.corpo.unshift(head);
    this.corpo.pop();
  }

  desenhar() {
    fill(0, 255, 0);
    for (let s of this.corpo) rect(s.x, s.y, this.tamanho, this.tamanho);
  }

  comer(x, y) {
    let head = this.corpo[0];
    if (head.x === x && head.y === y) {
      this.corpo.push({
      x: this.corpo[this.corpo.length - 1].x,
      y: this.corpo[this.corpo.length - 1].y
    });
      return true;
    }
    return false;
  }

  verificarColisao() {
    let head = this.corpo[0];
    if (head.x < 0 || head.x >= width || head.y < 0 || head.y >= height) return true;
    for (let i = 1; i < this.corpo.length; i++) {
      if (head.x === this.corpo[i].x && head.y === this.corpo[i].y) return true;
    }
    return false;
  }
}
