function pantallaInicio() {
  image(inicio, 0, 0, 600, 600);
  textAlign(CENTER, CENTER);
  textSize(60);
  fill(255, 64, 64);
  text("Defensor medieval", width/2, 180);

  textSize(25);
  fill(255);
  text("Defende tu reino del ataque del enemigo", width/2, 270);
  textSize(20);
  text("Si 3 balas de cañon llegan a golpearlo, no sobrevivira al ataque.", width/2, 310);
  text("Utiliza las flechas de izquierda y derecha", width/2, 340);
  text("para frenar las balas antes de tiempo", width/2, 370);
  fill(255, 64, 64);
  text("'Clickea en la pantalla para empezar'", width/2, 420);
}
