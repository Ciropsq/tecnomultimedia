function iniciarJuego() {
  //valores iniciales del enemigo:
  r_enemigo = 20;
  x_enemigo = random( r_enemigo, width-r_enemigo );
  y_enemigo = -r_enemigo-random(50, 100);
  vel_enemigo = 7;

  //valores iniciales del personaje:
  x_p = width/2;
  y_p = height - 60;
  r_p = 40;
  vel_p = 0;

  //valores iniciales de los contadores:
  agarre = 0;
  cayo = 0;
}
