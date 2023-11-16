/*
- Minijuego: Viaje al centro de la tierra 
Teclas "A" y "D" para moverse de izquierda a derecha para agarrar recursos y esquivar rocas.
Tecla "I" para iniciar el juego y tecla "R" para reiniciarlo una vez terminado

- Link al video explicativo de YouTube: https://youtu.be/rIjgmnK_JAw
*/

let juego; // Variable para el juego

function setup() {
  createCanvas(600, 600);
  juego = new MiniJuego(); // Inicializar el juego
}

function draw() {
  juego.ejecutar(); // Ejecutar el juego
}

function keyPressed() {
  juego.keyPressed(key); // Pasar la tecla presionada al juego
}
