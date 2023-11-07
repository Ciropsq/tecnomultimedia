class Explorador {
  constructor() {
    this.x = width / 2;
    this.y = height - 140;
    this.ancho = 70;
    this.alto = 90;
    this.imagen = loadImage('assets/der1.png');
  }

  mostrar() {
    image(this.imagen, this.x, this.y, this.ancho, this.alto);
  }

  mover(paso) {
    this.x = constrain(this.x + paso, 0, width - this.ancho);
  }

  intersecta(elemento) {
    return (
      this.x < elemento.x + elemento.ancho &&
      this.x + this.ancho > elemento.x &&
      this.y < elemento.y + elemento.alto &&
      this.y + this.alto > elemento.y
    );
  }
}
