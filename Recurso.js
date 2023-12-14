class Recurso {
  constructor(imagenes) {
    this.x = random(width);
    this.y = 0;
    this.ancho = 50;
    this.alto = 50;
    this.velocidad = random(2, 5);
    this.imagenes = [
      imagenes[24],
      imagenes[25],
      imagenes[26]
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
