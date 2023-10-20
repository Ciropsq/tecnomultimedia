/*
- Minijuego POO de cuento: Viaje al centro de la tierra de Julio Verne
Teclas "A" y "D" para moverse de izquierda a derecha para agarrar recursos y esquivar rocas.
Tecla "I" para iniciar el juego y tecla "R" para reiniciarlo una vez terminado
- Link video de Youtube: https://youtu.be/37a0aVGEUaw
*/

let explorador;
let recursos = [];
let rocas = [];
let vidas = 3;
let recursosRecolectados = 0;
let objetivoRecursos = 5;
let juegoTerminado = false;
let mensaje;
let inicio = true;
let tiempoInicial, tiempoLimite = 12;
let imgInicio, imgGanaste, imgPerdiste, cueva;

function preload() {
  cueva = loadImage('assets/cueva.jpg'); 
  imgInicio = loadImage('assets/Imginicio.jpg');
  imgGanaste = loadImage('assets/ImgGanaste.jpg');
  imgPerdiste = loadImage('assets/ImgPerdiste.jpg');
}

function setup() {
  createCanvas(600, 600);
  explorador = new Explorador();
  for (let i = 0; i < 2; i++) {
    recursos.push(new Recurso());
    rocas.push(new Roca());
  }
  mensaje = "Presiona 'I' para empezar";
  tiempoInicial = millis();
}

function draw() {
  if (inicio) {
    pantallaInicio();
  } else {
    image(cueva, 0, 0, width, height);
    if (!juegoTerminado) {
      mostrarEstado();
      explorador.mostrar();
      manejarRecursos();
      manejarRocas();
      mostrarMensaje();
      verificarTiempoAgotado();
      verificarVidasAgotadas();
    } else {
      mostrarPantallaResultado();
    }
  }
}

function keyPressed() {
  if (inicio) {
    // Si estamos en la pantalla de inicio, 'I' inicia el juego
    if (key === 'I' || key === 'i') {
      inicio = false;
      reiniciarJuego();
    }
  } else if (!juegoTerminado) {
    // Solo permitir movimiento si el juego no termino
    if (key === 'a' || key === 'A') {
      explorador.mover(-40);
    } else if (key === 'd' || key === 'D') {
      explorador.mover(40);
    }
  } else {
    // Permitir reiniciar el juego con 'R' si el juego termino
    if (key === 'R' || key === 'r') {
      reiniciarJuego();
    }
  }
}

function pantallaInicio() {
  image(imgInicio, 0, 0, width, height);
  fill(255);
  textSize(55);
  text("Viaje al", 50, 100);
  textSize(55);
  text("centro de la Tierra", 50, 160);
  textSize(20);
  text("(el minijuego)", 230, 185);
  text("- Instrucciones:", 50, 240);
  textSize(20);
  text("Usa 'A' y 'D' para moverte.", 50, 270);
  text("Recolecta los recursos que te lanzan tus compañeros.", 50, 300);
  text("Evita las rocas que se desprenden de la cueva", 50, 330);
  text("Presiona 'i' para empezar.", 50, 390);
  text("Tienes 12s ¡La cueva se derrumba!", 50, 360);
}

function mostrarEstado() {
  textSize(20);
  fill(255);
  text('Vidas: ' + vidas, 10, 30);
  text('Recursos: ' + recursosRecolectados + ' / ' + objetivoRecursos, 10, 60);

  let tiempoTranscurrido = (millis() - tiempoInicial) / 1000;
  let tiempoRestante = tiempoLimite - tiempoTranscurrido;
  
  if (tiempoRestante < 0) {
    tiempoRestante = 0;
  }
  
  text('Tiempo: ' + tiempoRestante.toFixed(1) + ' s', 10, 90);
}


function manejarRecursos() {
  for (let i = 0; i < recursos.length; i++) {
    let recurso = recursos[i];
    recurso.mostrar();
    recurso.mover();
    if (explorador.intersecta(recurso)) {
      recursosRecolectados++;
      recurso.reiniciar();
    }
    if (recurso.y > height) {
      recurso.reiniciar();
    }
  }

  if (recursosRecolectados >= objetivoRecursos) {
    juegoTerminado = true;
    mensaje = "¡Lo lograste!\nLa expedición continúa con éxito!\nPresiona R para reiniciar";
  }
}

function manejarRocas() {
  for (let i = 0; i < rocas.length; i++) {
    let roca = rocas[i];
    roca.mostrar();
    roca.mover();
    if (explorador.intersecta(roca)) {
      vidas--;
      roca.reiniciar();
    }
    if (roca.y > height) {
      roca.reiniciar();
    }
  }
}


function mostrarMensaje() {
  fill(0);
  textSize(32);
  text(mensaje, 220, height / 2);
}

function verificarTiempoAgotado() {
  let tiempoTranscurrido = (millis() - tiempoInicial) / 1000;
  if (tiempoTranscurrido >= tiempoLimite) {
    juegoTerminado = true;
    mensaje = "Se acabó el tiempo.\nLa cueva se derrumba y quedas atrapado\nPresiona R para reiniciar";
  }
}

function verificarVidasAgotadas() {
  if (vidas <= 0) {
    juegoTerminado = true;
    mensaje = "Los fragmentos de la montaña te dañaron.\nLa expedición se cancela.\nPresiona R para reiniciar";
  }
}

function mostrarPantallaResultado() {
  if (juegoTerminado) {
    image(cueva, 0, 0, width, height);
    fill(255);
    textSize(32);

    if (mensaje.includes("¡Lo lograste!")) {
      image(imgGanaste, 0, 0, width, height);
      textSize(30);
      fill(0, 255, 0);
      text("¡Lo lograste!\nLa expedición continúa con éxito!\nPresiona R para reiniciar", 50, 160);
    }

    if (mensaje.includes("Se acabó el tiempo.") || mensaje.includes("Los fragmentos de la montaña te dañaron.")) {
      image(imgPerdiste, 0, 0, width, height);
      textSize(30);
      fill(255, 0, 0);
      text(mensaje, 30, 160);
    }
  }
}

function reiniciarJuego() {
  juegoTerminado = false;
  vidas = 3;
  recursosRecolectados = 0;
  tiempoInicial = millis();
  explorador.x = width / 2;

  for (let i = 0; i < recursos.length; i++) {
    recursos[i].reiniciar();
  }

  for (let i = 0; i < rocas.length; i++) {
    rocas[i].reiniciar();
  }

  mensaje = "";
  inicio = false;
}

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
