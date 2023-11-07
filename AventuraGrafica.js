class AventuraGrafica {
  constructor() {
    this.pantallaActual = 0;
    this.imagenes = [];
    this.cargarImagenes();

    // Botones
    this.botones = [
      new Boton(width / 2 - 150, "Camino Izquierda"),
      new Boton(width / 2, "Camino Medio"),
      new Boton(width / 2 + 150, "Camino Derecha"),
    ];
  }

  cargarImagenes() {
    for (let i = 0; i < 18; i++) {
      this.imagenes[i] = loadImage("imagen" + i + ".png");
    }
  }

  draw() {
    switch (this.pantallaActual) {
    case 0:
      this.pantallaInicio();
      break;
    case 1:
      this.pantalla1();
      break;
    case 2:
      this.pantalla2();
      break;
    case 3:
      this.final3();
      break;
    case 4:
      this.pantalla4();
      break;
    case 5:
      this.pantalla5();
      break;
    case 6:
      this.pantalla6();
      break;
    case 7:
      this.pantalla7();
      break;
    case 8:
      this.pantalla8();
      break;
    case 9:
      this.pantalla9();
      break;
    case 10:
      this.pantalla10();
      break;
    case 11:
      this.pantalla11();
      break;
    case 12:
      this.pantalla12();
      break;
    case 13:
      this.pantalla13();
      break;
    case 14:
      this.final1();
      break;
    case 15:
      this.final2();
      break;
    case 16:
      this.pantallaCreditos();
      break;
    default:
      break;
    }
  }

  // Dibujar los botones
  this.botones.forEach(boton => {
    boton.dibujar();
  }
  );
}

// Pantalla de inicio
pantallaInicio() {
  image(imagenes[16], 0, 0, width, height);
  textAlign(CENTER, CENTER);
  textSize(45);
  fill(255);
  text("Viaje al centro de la tierra", width / 2, height / 2 - 200);

  textSize(20);
  text("Presiona ENTER para comenzar", width / 2, height / 2 - 100);

  // Boton de Creditos
  fill(255);
  ellipse(300, 450, 100, 100);
  fill(0);
  text("Creditos", 300, 450);
}

// Pantalla de créditos
pantallaCreditos() {
  image(imagenes[15], 0, 0, width, height);
  textAlign(CENTER, CENTER);
  textSize(28);
  fill(255);
  text("Créditos", width / 2, height / 2 - 200);


  textSize(18);
  text("Desarrollado por: Ciro Passalacqua", width / 2, height / 2 - 100);
  text("Legajo 94782/7. Materia; Tecnologia multimedial 1", width / 2, height / 2 - 50);
  text("Obra y autor: Viaje al centro de la tierra, Julio Verne", width / 2, height / 2);

  // Boton para volver a la pantalla inicial
  this.dibujarBotonRedondeado(width / 2, height / 2 + 200, "Volver");
}

// Pantalla 1
pantalla1() {
  image(imagenes[0], 0, 0, width, height);

  fill(255);
  textAlign(CENTER, CENTER);
  textSize(30);
  text("Alex (tú), Otto (tu tío) y una guía\n escalan la montaña indicada\n por un pergamino que encontraron", width / 2, height / 2 - 50);

  this.dibujarBotonRedondeado(width / 2, height / 2 + 100, "CLICKEA PARA ADENTRARTE EN ELLA");
}

// Pantalla 2
pantalla2() {
  image(imagenes[1], 0, 0, width, height);

  textAlign(CENTER, CENTER);
  textSize(18);
  fill(255);
  text("Al entrar en la montaña ven que,\n como decia Verne, hay 3 agujeros\n por los que entrar pero 2 de ellos\n pueden ser muy peligrosos", width / 2, height / 2 - 180);

  textSize(16);
  fill(255);
  text("Una sombra marca levemente el agujero del medio. ¿Por cuál entras?", width / 2, height / 2 + 50);

  this.dibujarBotonRedondeado(width / 2, height / 2 + 100, "Izquierda");
  this.dibujarBotonRedondeado(width / 2, height / 2 + 150, "Medio");
  this.dibujarBotonRedondeado(width / 2, height / 2 + 200, "Derecha");
}

// Pantalla 3
pantalla3() {
  image(imagenes[2], 0, 0, width, height);

  textAlign(CENTER, CENTER);
  textSize(20);
  fill (255);
  text("¡ELEGISTE EL EQUIVOCADO!", width / 2, height / 2 - 200);

  textAlign(CENTER, CENTER);
  textSize(16);
  fill (0);
  text("El agujero era... ¡UN VOLCAN!.\n Has muerto, clickea el boton\n para volver al inicio", width / 2, height / 2);

  this.dibujarBotonRedondeado(width / 2, height / 2 + 100, "Inicio");
}

// Pantalla 4
pantalla4() {
  image(imagenes[3], 0, 0, width, height);

  textAlign(CENTER, CENTER);
  textSize(18);
  fill(255);
  text("El agujero desemboca en un rìo\n que con la corriente te lleva de vuelta al\n pie de la montaña", width / 2, height / 2);
  textSize(13);
  fill(200, 0, 0);
  text("(Esta mal, pero no tan mal)", width / 2, height / 2 + 130);

  this.dibujarBotonRedondeado(width / 2, height / 2 + 100, "Volver a la montaña");
}

// Pantalla 5
pantalla5() {
  image(imagenes[4], 0, 0, width, height);

  textAlign(CENTER, CENTER);
  textSize(16);
  fill(255);
  text("Al parecer... ¡Elegiste el correcto!\n Junto con tu equipo descienden\n hacia adentro", width / 2, height / 2);

  this.dibujarBotonRedondeado(width / 2, height / 2 + 100, "Siguiente");
}

// Pantalla 6
pantalla6() {
  image(imagenes[5], 0, 0, width, height);

  textAlign(CENTER, CENTER);
  textSize(16);
  text("Al bajar te enfrentas a una gran decision\n al ver que hay dos caminos.\n ¿Cual elegis?", width / 2, height / 2);

  this.dibujarBotonRedondeado(width / 2 - 150, height / 2 + 100, "Camino Izquierda");
  this.dibujarBotonRedondeado(width / 2 + 150, height / 2 + 100, "Camino Derecha");
}

// Pantalla 7
pantalla7() {
  image(imagenes[6], 0, 0, width, height);

  textAlign(CENTER, CENTER);
  textSize(16);
  text("Elegiste el camino de la izquierda y comienzan el\n descenso hacia el... CENTRO DE LA TIERRA.\n A lo largo del recorrido encuentran muchos\n minerales y fosiles, pero finalmente entras\n a una cueva desconocida", width / 2, height / 2);

  this.dibujarBotonRedondeado(width / 2, height / 2 + 100, "Entrar");
}

// Pantalla 8
pantalla8() {
  image(imagenes[7], 0, 0, width, height);

  textAlign(CENTER, CENTER);
  textSize(16);
  text("Elegiste el camino de la derecha y\n luego de caminar un rato llegas a una Playa(segun tu brujula a la costa sur).\n Hay un problema y es que segun el diario de Verne,\n una tormenta arrazara el lugar y la temperatura subira muchisimo,\n lo que no podras soportar.\n Junto con tus compañeros deciden irse de alli", width / 2, height / 2);

  this.dibujarBotonRedondeado(width / 2, height / 2 + 100, "Siguiente");
}

// Pantalla 9
pantalla9() {
  image(imagenes[8], 0, 0, width, height);

  textAlign(CENTER, CENTER);
  textSize(16);
  text("Cuando estas entrar a una cueva\n vez una luz al fondo de ella,\n ¿Prefieres asumir el riesgo y entrar,\n o seguir descendiendo?", width / 2, height / 2);

  this.dibujarBotonRedondeado(width / 2, height / 2 - 65, "Seguir descendiendo");
  this.dibujarBotonRedondeado(width / 2, height / 2 + 50, "Ir hacia la luz");
}

// Pantalla 10
pantalla10() {
  image(imagenes[9], 0, 0, width, height);

  textAlign(CENTER, CENTER);
  textSize(16);
  text("Llegas a la costa norte de una playa la cual,\n segun el libro, era desde la que tenias que escapar\n antes que la temperatura comenzase a preocupar.\n Una GRAN tormenta se acerca por lo que\n construyen una balsa y comienzan la huida", width / 2, height / 2);

  this.dibujarBotonRedondeado(width / 2, height / 2 + 100, "Navegar");
}

// Pantalla 11
pantalla11() {
  image(imagenes[10], 0, 0, width, height);

  textAlign(CENTER, CENTER);
  textSize(16);
  text("La tormenta no fue amable, pero\n logran llegar a una orilla con vida tratando de escapar\n cuanto antes para que las altas temperaturas no los maten ", width / 2, height / 2);

  this.dibujarBotonRedondeado(width / 2, height / 2 + 100, "Siguiente");
}

// Pantalla 12
pantalla12() {
  image(imagenes[11], 0, 0, width, height);

  textAlign(CENTER, CENTER);
  textSize(16);
  text("Encuentras una ultima cueva con la esperanza de\n que sea la que Verne menciono, buscando un escape", width / 2, height / 2);

  this.dibujarBotonRedondeado(width / 2, height / 2 + 100, "Entrar");
}

// Pantalla 13
pantalla13() {
  image(imagenes[12], 0, 0, width, height);

  textAlign(CENTER, CENTER);
  textSize(16);
  text("Ya casi agonizando del calor por la subida de temperatura\n tenes que tomar la ULTIMA decision para poder escapar.\n A tu disposicion solo te queda DINAMITA, pero\n te percatas de un HEIZER que podria ser\n clave para subir a la superficie", width / 2, height / 2);

  this.dibujarBotonRedondeado(width / 2, height / 2 + 100, "Utilizas la dinamita");
  this.dibujarBotonRedondeado(width / 2, height / 2 + 150, "Buscas la manera de subir con el Heizer");
}

// Final 1
final1() {
  image(imagenes[17], 0, 0, width, height);
  textAlign(CENTER, CENTER);
  fill(255);
  textSize(16);
  text("¡La dinamita fue demasiado! El piso de la cueva comienza\n a derrumbarse y tu equipo cae con vos.\n Tan cerca pero tan lejos...mueren", width / 2, height / 2);

  // Botón para volver a la pantalla inicial
  this.dibujarBotonRedondeado(width / 2, height / 2 + 100, "Volver a la pantalla inicial");
}

// Final 2
final2() {
  image(imagenes[14], 0, 0, width, height);

  textAlign(CENTER, CENTER);
  fill(255);
  textSize(16);
  text("¡INCREIBLE! consiguen empujar una calavera de\n dinosario sobre el Heizer y se suben sobre el. El heizer erupciona y\n salen volando por los aires\n¡Escapan exitosamente y sobreviven!\n¡SIIIII!", width / 2, height / 2 - 200);

  // Botón para volver a la pantalla inicial
  this.dibujarBotonRedondeado(width / 2, height / 2 + 100, "Volver a la pantalla inicial");
}

// Final 3
final3() {
  image(imagenes[2], 0, 0, width, height);

  textAlign(CENTER, CENTER);
  textSize(20);
  fill (255);
  text("¡ELEGISTE EL EQUIVOCADO!", width / 2, height / 2 - 200);

  textAlign(CENTER, CENTER);
  textSize(16);
  fill (0);
  text("El agujero era... ¡UN VOLCAN!.\n Has muerto, clickea el boton\n para volver al inicio", width / 2, height / 2);

  // Botón para volver a la pantalla inicial
  this.dibujarBotonRedondeado(width / 2, height / 2 + 100, "Inicio");
}
keyPressed() {
  if (key === 'Enter') {
    if (this.pantallaActual === 0) {
      this.pantallaActual = 1; // Iniciar el juego
    }
  } else if (key === 'p') {
    this.imprimirInformacionPantalla();
  }
}
mousePressed() {
  if (this.pantallaActual === 0) {
    if (dist(300, 450, mouseX, mouseY) < 80 / 2) {
      this.pantallaActual = 16; // Ir a la pantalla de créditos
    }
  } else if (this.pantallaActual === 16) {
    // Lógica para el botón de regreso a la pantalla inicial
    let distancia = dist(mouseX, mouseY, width / 2, height / 2 + 200);
    if (distancia < this.botonAncho / 2) {
      this.pantallaActual = 0;
    }
  } else if (this.pantallaActual === 1) {
    if (this.boton1.fueClickeado()) {
      this.pantallaActual = 2;
    }
  } else if (this.pantallaActual === 2) {
    if (this.boton2.fueClickeado()) {
      this.pantallaActual = 3;
    } else if (this.boton3.fueClickeado()) {
      this.pantallaActual = 5;
    } else if (this.boton4.fueClickeado()) {
      this.pantallaActual = 4;
    }
  } else if (
    this.pantallaActual === 3 ||
    this.pantallaActual === 5 ||
    this.pantallaActual === 8
    ) {
    if (this.boton5.fueClickeado()) {
      if (this.pantallaActual === 3) {
        this.pantallaActual = 0;
      } else {
        this.pantallaActual++;
      }
    }
  } else if (this.pantallaActual === 4) {
    if (this.boton6.fueClickeado()) {
      this.pantallaActual = 2;
    }
  } else if (this.pantallaActual === 6) {
    if (this.boton7.fueClickeado()) {
      this.pantallaActual = 7;
    } else if (this.boton8.fueClickeado()) {
      this.pantallaActual = 8;
    }
  } else if (this.pantallaActual === 7) {
    if (this.boton9.fueClickeado()) {
      this.pantallaActual = 9;
    }
  } else if (this.pantallaActual === 9) {
    if (this.boton10.fueClickeado()) {
      this.pantallaActual = 12;
    } else if (this.boton11.fueClickeado()) {
      this.pantallaActual = 10;
    }
  } else if (
    this.pantallaActual === 10 ||
    this.pantallaActual === 11 ||
    this.pantallaActual === 12
    ) {
    if (this.boton12.fueClickeado()) {
      if (this.pantallaActual === 10) {
        this.pantallaActual = 11;
      } else if (this.pantallaActual === 11) {
        this.pantallaActual = 12;
      } else {
        this.pantallaActual = 13;
      }
    }
  } else if (this.pantallaActual === 13) {
    if (this.boton13.fueClickeado()) {
      this.pantallaActual = 14;
    } else if (this.boton14.fueClickeado()) {
      this.pantallaActual = 15;
    }
  } else if (this.pantallaActual === 14 || this.pantallaActual === 15) {
    if (this.boton15.fueClickeado()) {
      this.pantallaActual = 0;
    }
  }
}

imprimirInformacionPantalla() {
  console.log("Pantalla actual:", this.pantallaActual);
}

// Función para dibujar botones redondeados
dibujarBotonRedondeado(x, y, texto) {
  noStroke();
  fill(100, 100, 100, 150);
  ellipse(x, y, this.botonAncho, this.botonAlto);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(20);
  text(texto, x, y);
}
}
