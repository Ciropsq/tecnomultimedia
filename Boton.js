class Boton {
  constructor(x, y, ancho, alto, texto) {
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
    this.texto = texto;
  }

  dibujar() {
  noStroke();
  fill(100, 100, 100, 150);
  rect(this.x, this.y, this.ancho, this.alto, 10);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(20);
  text(this.texto, this.x + this.ancho / 2, this.y + this.alto / 2);
}


  fueClickeado() {
    return mouseX >= this.x && mouseX <= this.x + this.ancho &&
           mouseY >= this.y && mouseY <= this.y + this.alto;
  }
}
