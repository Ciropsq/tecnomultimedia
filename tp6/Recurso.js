class Recurso {
  constructor() {
    this.x = random(width);
    this.y = 0;
    this.ancho = 50;
    this.alto = 50;
    this.velocidad = random(2, 5);
    this.imagenes = [
      loadImage('assets/recurso1.png'),
      loadImage('assets/recurso2.png'),
      loadImage('assets/recurso3.png'),
    ];
    this.imagen = random(this.imagenes);
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
    this.imagen = random(this.imagenes);
  }
}
