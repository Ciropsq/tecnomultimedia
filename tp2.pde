// link al video explicativo en Youtube: https://youtu.be/lp67cNGzHx8
/*Interacciones:

- Al apretar " " (espacio) cambia de direccion la animacion de la ilusion
- Al apretar "c" cambia el color de los cuadrados de la ilusion
- Al deslizar el mouse en el eje X podemos agrandar o achicar el tamaño de los cuadrados
- Por ultimo, con la tecla "r" se reinician las variables como desde un principio
*/

int numRects = 25;
int espacio = 80;
float rotVel = 0.25;  // Valor más bajo para una rotación más lenta
float rotAngulo = 0;
boolean clock = true;
int estado;
color rectColor1;  // Variable global para el primer color de los rectángulos
color rectColor2;  // Variable global para el segundo color de los rectángulos
PImage ilusionImagen;

void setup() {
  size(800, 400);
  estado = 0;
  resetVariables();  // Restablecer las variables a su estado original
  ilusionImagen = loadImage("data/ilusionImagen.jpg");
}

void draw() {
  background(255);
  image(ilusionImagen, 0, 0, 400, 400);  // Dibujar la imagen en la posición (0, 0)

  translate(600, height/2);

  if (clock) {
    rotAngulo += rotVel;
  } else {
    rotAngulo -= rotVel;
  }

  rotate(radians(rotAngulo));

  for (int i = 0; i < numRects; i++) {
    float scaleFactor = map(i, 0, numRects, 1, 0.2);
    float rectRotation = radians(rotAngulo * (i + 1));

    for (int j = 0; j < numRects; j++) {
      if ((i + j) % 2 == 0) {
        drawRotatingRect(map(mouseX, 400, 800, 250, 290), scaleFactor, rectRotation, rectColor1);
      } else {
        drawRotatingRect(map(mouseX, 400, 800, 250, 290), scaleFactor, rectRotation, rectColor2);
      }
    }
  }
  printTamaño ();
}

void drawRotatingRect(float size, float scaleFactor, float rotation, color rectColor) {
  pushMatrix();
  rotate(rotation);
  scale(scaleFactor);
  fill(rectColor);
  rect(-size/2, -size/2, size, size);
  popMatrix();
}

float calcularAreaRectangulo(float min, float max) {
  float tamanio = map(mouseX, 400, 800, min, max);
  return tamanio;
}

void keyPressed() {
  if (keyCode == 32) {
    clock = !clock;
  }
  if (key == 'c') {
    rectColor1 = color(random(50, 150), random(50, 150), random(50, 150));  // Cambiar a un nuevo color aleatorio 1
    rectColor2 = color(random(50, 150), random(50, 150), random(50, 150));  // Cambiar a un nuevo color aleatorio 2
  }
  if (key == 'r') {
    resetVariables();  // Restablecer las variables a su estado original
  }
}

void resetVariables() {
  rectColor1 = color(random(255), random(255), random(255));  // Color aleatorio 1
  rectColor2 = color(random(255), random(255), random(255));  // Color aleatorio 2
  rotAngulo = 0;
  clock = true;
  
}
  void printTamaño() {
    float min = 250;
    float max = 290;
    float tamanio = calcularAreaRectangulo(min, max);
    println("El tamaño del rectángulo es: " + tamanio);
  }
