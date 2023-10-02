// Declaración de la clase Parque
class Parque {
  constructor() {
    this.Tiempo = 0;
    this.Arboles = [new Arbol(100, 300), new Arbol(400, 250)];
    this.Bancos = [new Banco(200, 350), new Banco(500, 300)];
    this.Pajaros = [new Pajaro(50, 100), new Pajaro(300, 50)];
  }

  actualizar() {
    this.Tiempo++;
    // Implementa cualquier lógica de actualización adicional aquí
  }

  dibujar() {
    background(135, 206, 235); // Color de fondo del cielo

    // Dibuja elementos del parque
    for (let i = 0; i < this.Arboles.length; i++) {
      this.Arboles[i].dibujar();
    }
    for (let i = 0; i < this.Bancos.length; i++) {
      this.Bancos[i].dibujar();
    }
    for (let i = 0; i < this.Pajaros.length; i++) {
      this.Pajaros[i].dibujar();
    }

    dibujarContadorTiempo(this.Tiempo);
  }
}

// Declaración de la clase Árbol
class Arbol {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  dibujar() {
    // Dibuja un árbol
    fill(139, 69, 19); // Color marrón
    rect(this.x - 20, this.y, 40, 100); // Tronco
    fill(0, 128, 0); // Color verde
    ellipse(this.x, this.y - 40, 120, 120); // Hojas
  }
}

// Declaración de la clase Banco
class Banco {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  dibujar() {
    // Dibuja un banco
    fill(139, 69, 19); // Color marrón
    rect(this.x, this.y, 150, 40); // Asiento
    rect(this.x + 10, this.y - 20, 20, 60); // Respaldo izquierdo
    rect(this.x + 120, this.y - 20, 20, 60); // Respaldo derecho
  }
}

// Declaración de la clase Pajaro
class Pajaro {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  dibujar() {
    // Dibuja un pájaro
    fill(0, 0, 0); // Color negro
    ellipse(this.x, this.y, 30);
    triangle(this.x - 15, this.y, this.x - 30, this.y + 10, this.x - 15, this.y + 20);
  }
}

let parque;

function setup() {
  createCanvas(800, 400);
  parque = new Parque();
}

function draw() {
  parque.actualizar();
  parque.dibujar();
}

function dibujarContadorTiempo(tiempo) {
  // Dibuja contador de tiempo
  textSize(24);
  fill(255);
  text("Tiempo: " + tiempo, 20, 30);
}
