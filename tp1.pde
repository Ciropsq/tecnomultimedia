int estado;
int marcaEnElTiempo;
PImage tucan, tucan1, tucan2, tucan3, selva, tucanfinal;
PFont fuente;
float textoMovX, textoMovY, grande;
float opacidad;


void setup() {
  size( 640, 480 );
  //imagenes y fuente
  tucan = loadImage ("data/tucan.jpg");
  tucan2 = loadImage ("data/Tucan2.jpg");
  tucan3 = loadImage ("data/Tucan3.jpg");
  tucanfinal = loadImage ("data/tucanfinal.jpg");
  selva = loadImage ("data/selva.jpg");
  fuente = loadFont ("Verdana-Bold-48.vlw");

  estado = 0;
  textoMovX = 0;
  textoMovY = 0;
  grande = 0;
  opacidad = 0;
}

void draw() {
  textFont (fuente);
  int diferenciaTemporal = millis() - marcaEnElTiempo;

  //estado 0
  if ( estado == 0 ) {
    textAlign(LEFT, LEFT);
    image (tucan, 0, 0, 640, 480);
    opacidad = opacidad +2;
    //texto tp1
    fill(255, 200, 0, opacidad);
    text ("Tp1", 280, 330);
    //texto Los Tucanes
    fill(255, 200, 0, opacidad);
    text ("Los Tucanes", 290, 385);

    //texto Entrá en la selva
    fill(255);
    textSize(20);
    text("¡Entrá a la selva!", 30, 60);

    //color y forma boton inicio
    fill(255, 200, 0);
    ellipse(100, 100, 50, 50);
  }
  //estado 1
  if (estado == 1 ) {
    image (tucan3, 0, 0, 640, 480);
    grande = grande + 0.80;
    if (grande>=17) {
      grande=17;
    }
    //textos del estado 1
    textSize(grande);
    textAlign(CENTER, CENTER);
    fill(237, 224, 175);
    text("Los tucanes son\n aves tropicales\n que viven en\n Centro y\n Sudamérica", 110, 100);
    text("Son conocidos por\n su gran y colorido\n pico, que puede\n ser más largo\n que su cuerpo", 525, 365);

    if ( diferenciaTemporal >= 6800 ) {
      estado = 2;
      marcaEnElTiempo = millis();
      grande =0;
      textoMovX = 640;
    }
    //estado 2
  } else if (estado == 2 ) {
    textoMovX=textoMovX - 1.50;

    if (textoMovX <= 320) {
      textoMovX = 320;
    }
    //texto e imagen estado 2
    image (tucan2, 0, 0, 640, 480);
    textSize(25);
    fill(237, 224, 175);
    text("Se alimentan principalmente\n de frutas, pero también\n comen insectos y\n pequeños animales", textoMovX, 80);

    if ( diferenciaTemporal >= 6000 ) {
      estado = 3;
      marcaEnElTiempo = millis();
      textoMovX=0;
    }
    //estado 3
  } else if (estado == 3 ) {
    textoMovY=textoMovY + 1.50;

    if (textoMovY >= 230) {
      textoMovY = 230;
    }
    //texto e imagen estado 3
    image (selva, 0, 0, 640, 480);
    fill(237, 224, 175);
    textSize(33);
    text ("Viven en selvas tropicales\n y anidan en huecos de\n árboles o en\n termiteros abandonados", 323, textoMovY);
    textAlign (CENTER, CENTER);

    if ( diferenciaTemporal >= 5500 ) {
      estado = 4;
      marcaEnElTiempo = millis();
      textoMovY = 400;
    }
    //estado 4
  }
  if (estado == 4) {
    image (tucanfinal, 0, 0, 640, 480);
    //textos estado 4
    textSize(60);
    fill(237, 224, 175);
    text ("Gracias por ver", 310, 240);

    textSize(20);
    text ("Volver a\n reproducir", 548, 114);
    //Color y forma de boton de reinicio
    fill(237, 224, 175);
    circle (550, 60, 60);
  }
  println( millis() + " - " + marcaEnElTiempo + " = " + diferenciaTemporal );
}

void mousePressed() {
  //boton inicio
  if (estado == 0 ) {
    if (dist(100, 100, mouseX, mouseY)< 80/2) {
      estado = 1;
      marcaEnElTiempo = millis();
      opacidad = 0;
    }
  }
  //boton reinicio
  if (estado == 4) {
    if (dist(550, 60, mouseX, mouseY)< 60/2) {
      estado = 0;
      marcaEnElTiempo = millis();
      textoMovY = 0;
      textoMovX = 0;
    }
  }
}
