class Pantalla {
  constructor(imagen, botones, textos) {
    this.imagen = imagen;
    this.botones = botones; 
    this.textos = textos; 
  }

  mostrar() {
    image(this.imagen, 0, 0, width, height);
    
    // Implementa la lógica para mostrar textos
    textAlign(CENTER, CENTER);
    textSize(20);
    fill(255);
    for (let i = 0; i < this.textos.length; i++) {
      text(this.textos[i], width / 2, height / 2 - 200 + i * 30);
    }

    // Implementa la lógica para mostrar botones
    for (let boton of this.botones) {
      boton.mostrar();
    }
  }
}
