function pantallaJugando() {
  image(castillo, 0, 0, 600, 600);

  //comportamiento de las variables del enemigo:
  y_enemigo += vel_enemigo;
  if ( y_enemigo > width+r_enemigo ) {
    y_enemigo = -r_enemigo-random(50, 100);
    x_enemigo = random( r_enemigo, width-r_enemigo);

    //ademas agrego uno a la cuenta de caidas:
    cayo++;
    if (  cayo>=3 ) {
      //perdi:
      estado = 2;
    }
  }

  //comportamiento del personaje:
  x_p+=vel_p;
  //funcion simplificada para limitar:
  x_p = constrain( x_p, 0+r_p, width-r_p);



  //dibujo del enemigo:
  push();
  fill(180);
  ellipseMode(CENTER);
  noFill();
  noStroke();
  ellipse(x_enemigo, y_enemigo, r_enemigo*2, r_enemigo*2);
  image ( bala, x_enemigo-30, y_enemigo-30, 60, 60);
  pop();

  //dibujo del personaje:
  push();

  ellipseMode(CENTER);
  noFill();
  noStroke();
  ellipse(x_p, y_p, r_p*2, r_p*2);

  image(caballero, x_p-55, y_p-60, 120, 120);
  pop();

  //dibujo la interfaz:
  push();
  fill(255);
  textSize(19);
  textAlign(LEFT);
  text("Ataques frenados: " + agarre, 17, 25);
  text("Golpes recibidos al castillo: " + cayo, 340, 25);
  pop();


  //evaluo colision:

  if ( dist(x_p, y_p, x_enemigo, y_enemigo) <= r_enemigo+r_p  ) {

    //imprime en la consola del navegador

    //reinicio la ubicacion del enemigo:
    x_enemigo = random(r_enemigo, width-r_enemigo);
    y_enemigo = -r_enemigo-random(50, 100);

    //aumento uno en la cuenta de "atrapados":
    agarre++;

    //evalua si gano al alcanzar la cuenta:
    if ( agarre>=5 ) {
      //gano: (cambia de estado)
      estado = 3;
    }
  }
}
