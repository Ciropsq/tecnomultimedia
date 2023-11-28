class Roca {
  constructor() {
    this.x = random(width);
    this.y = 0;
    this.ancho = 50;
    this.alto = 50;
    this.velocidad = random(2, 5);
    this.imagen = loadImage('assets/roca.png');
  }

  mostrar() {
    image(this.imagen, this.x, this.y, this.ancho, this.alto);
  }

  mover() {
    this.y += this.velocidad;
  }

  reiniciar() {
    this.x = random(width);
    this.y = 0;
  }
}
