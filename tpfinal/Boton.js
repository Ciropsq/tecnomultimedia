class BotonRedondeado {
  constructor(x, y, texto) {
    this.x = x;
    this.y = y;
    this.texto = texto;
    this.ancho = 170;
    this.alto = 50;
  }

  mostrar() {
    noStroke();
    fill(255);
    ellipse(this.x, this.y, this.ancho, this.alto);
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(20);
    text(this.texto, this.x, this.y);
  }

  verificarClick() {
    // Verifica si el mouse está dentro del área ovalada
    let distanciaX = mouseX - this.x;
    let distanciaY = mouseY - this.y;
    let dentroOvalo = (distanciaX * distanciaX) / ((this.ancho / 2) * (this.ancho / 2)) +
                      (distanciaY * distanciaY) / ((this.alto / 2) * (this.alto / 2)) <= 1;
    return dentroOvalo;
  }
}
