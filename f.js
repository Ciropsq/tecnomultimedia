function pantallaPerdio() {
  image(perdiste, 0, 0, 600, 600);

  textAlign(CENTER, CENTER);
  textSize(40);
  fill(255, 64, 64);
  text("GAME OVER", width/2, 200);

  fill(255);
  textSize(20);
  text("No pudiste defender el castillo y no resistio el ataque", width/2, 250);
}
