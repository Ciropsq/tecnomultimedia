class Roca {
  constructor(imagenes) {
    this.x = random(width);
    this.y = 0;
    this.ancho = 50;
    this.alto = 50;
    this.velocidad = random(2, 5);
    this.roca = imagenes[27];
  }

  mostrar() {
    image(this.roca, this.x, this.y, this.ancho, this.alto);
  }

  mover() {
    this.y += this.velocidad;
  }

  reiniciar() {
    this.x = random(width);
    this.y = 0;
  }
}
