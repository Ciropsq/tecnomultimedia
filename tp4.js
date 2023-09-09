/* Juego Defensor Medieval:
controles; click para empezar y flechas Izq. y Der. para mover el personaje
Link video explicativo en YT: https://youtu.be/f4BYVONitoE
*/

let castillo;
let perdiste;
let ganaste;
let inicio;
let creditos;
var estado = 0;
var caballero;
let d=100;
let bala;

//variables del enemigo:
var x_enemigo, y_enemigo, r_enemigo, vel_enemigo;

//variables del personaje:
var x_p, y_p, r_p, vel_p;

//variables contadoras:
var agarre, cayo;


function setup() {
  createCanvas(600, 600);
}
function preload() {
  castillo = loadImage('assets/castillo.png');
  perdiste = loadImage('assets/perdiste.jpg');
  ganaste = loadImage('assets/ganaste.jpg');
  caballero = loadImage('assets/caballero.png');
  bala = loadImage('assets/bala.png');
  inicio = loadImage('assets/inicio.jpg');
  creditos = loadImage('assets/creditos.jpg');
}

function draw() {
  background(255, 0, 0);
  if ( estado==0 ) {
    //inicio
    pantallaInicio();
  } else  if ( estado==1 ) {
    //jugando
    pantallaJugando();
  } else  if ( estado==2 ) {
    //perdio
    pantallaPerdio();
    botonesFinales();
  } else  if ( estado==3 ) {
    //gano
    pantallaGano();
    botonesFinales();
  } else if ( estado==4 ) {
    //creditos
    pantallaCreditos();
  }
}
function botonesFinales() {
  for (let i = 0; i < 2; i++) {
    textAlign(CENTER, CENTER);
    textSize(20);
    fill(255, 0, 0);
    noStroke();
    ellipse(200 + 200 * i, 400, d);
    fill(255);
    text("CRED", 200, 400);
    text("RESET", 400, 400);
  }
}

function mousePressed() {
  if ( estado==0 ) {
    //inicio
    estado = 1;
    iniciarJuego();
  }
  //jugando

  if ( estado == 2  && dist(200, 400, mouseX, mouseY) < d/2) {  //d es diametro del circulo
    estado = 4;
  } else if ( estado == 2  && dist(400, 400, mouseX, mouseY) < d/2) {
    estado = 0;
  } else if ( estado == 3  && dist(200, 400, mouseX, mouseY) < d/2) {
    estado = 4;
  } else if ( estado == 3  && dist(400, 400, mouseX, mouseY) < d/2) {
    estado = 0;
  } else if (estado == 4) {
    estado = 0;
  }
}


function keyPressed() {
  if ( estado==1 ) {
    //jugando
    if ( keyCode === LEFT_ARROW ) {
      vel_p = -4;
    }
    if ( keyCode === RIGHT_ARROW ) {
      vel_p = 4;
    }
  }
}
function keyReleased() {
  if ( estado==1 ) {
    vel_p = 0;
  }
}
