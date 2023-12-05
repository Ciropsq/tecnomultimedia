/*
tp6=Historia estilo elige tu propia aventura; Viaje al centro de la tierra con Minijuego
 Interacciones: Al estar en la pantalla inicial y apretar ENTER se inicia la historia.
 Al apretar la tecla "p" en cualquiera de las pantallas, se imprimirá en la consola la información de la pantalla en la que te encuentras actualmente
 Además, podrás avanzar en la historia haciendo clic en los botones de cada una de las pantallas.
 
 - Minijuego
 Teclas "A" y "D" para moverse de izquierda a derecha para agarrar recursos y esquivar rocas.
 Tecla "I" para iniciar el juego
 */

// tp6.js
let aventura; 

function preload() {
  let imagenes = new Array(28);
  for (let i = 0; i < imagenes.length; i++) {
    imagenes[i] = loadImage("assets/imagen" + i + ".png");
  }
  aventura = new AventuraGrafica(imagenes);
}

function setup() {
  aventura.setup();
  createCanvas(600, 600);
}

function draw() {
  aventura.draw();
}

function keyPressed() {
  aventura.keyPressed();
}

function mousePressed() {
  aventura.mousePressed();
}
