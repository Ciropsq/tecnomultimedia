function pantallaGano() {
  image(ganaste, 0, 0, 600, 600);
  textAlign(CENTER, CENTER);
  textSize(50);
  fill(255, 64, 64);
  text("GANASTE!", width/2, 200);

  fill(255);
  textSize(20);
  text("Salvaste al castillo del ataque", width/2, 270);
}
