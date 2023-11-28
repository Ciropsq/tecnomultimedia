class AventuraGrafica {
  constructor() {
    this.pantallaActual = 0;
    this.botonAncho = 170;
    this.botonAlto = 50;
    this.botonRadio = 15;
    this.imagenes = new Array(18);
    this.juego = new MiniJuego();
    this.mostrarBotonResultado = false;
  }

  setup() {
    this.cargarImagenes();
    this.botones = []; // Array para almacenar los botones


    this.botones.push(new BotonRedondeado(300, 500, "Créditos", 170, 50));//0
    this.botones.push(new BotonRedondeado(300, 500, "Volver", 170, 50));//1
    this.botones.push(new BotonRedondeado(300, 500, "Adentrate en ella", 170, 50));//2
    this.botones.push(new BotonRedondeado(300, 400, "Izquierda", 170, 50));//3
    this.botones.push(new BotonRedondeado(300, 460, "Medio", 170, 50));//4
    this.botones.push(new BotonRedondeado(300, 525, "Derecha", 170, 50));//5
    this.botones.push(new BotonRedondeado(300, 400, "Inicio", 170, 50));//6
    this.botones.push(new BotonRedondeado(300, 500, "Volver a la montaña", 170, 50));//7
    this.botones.push(new BotonRedondeado(300, 400, "Siguiente", 170, 50));//8
    this.botones.push(new BotonRedondeado(150, 400, "Camino Izquierda", 170, 50));//9
    this.botones.push(new BotonRedondeado(450, 400, "Camino Derecha", 170, 50));//10
    this.botones.push(new BotonRedondeado(300, 400, "Entrar", 170, 50));//11
    this.botones.push(new BotonRedondeado(300, 335, "Seguir descendiendo", 170, 50));//12
    this.botones.push(new BotonRedondeado(300, 450, "Ir hacia la luz", 170, 50));//13
    this.botones.push(new BotonRedondeado(300, 400, "Navegar", 170, 50));//14
    this.botones.push(new BotonRedondeado(300, 400, "Subir al barco", 170, 50));//15
    this.botones.push(new BotonRedondeado(300, 400, "Utilizar la dinamita", 170, 50));//16
    this.botones.push(new BotonRedondeado(300, 450, "Usar el Heizer", 170, 50));//17
    this.botones.push(new BotonRedondeado(300, 400, "Volver al inicio", 170, 50));//18
    this.botones.push(new BotonRedondeado(300, 400, "Continuar", 170, 50));//19
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

  cargarImagenes() {
    for (let i = 0; i < 18; i++) {
      this.imagenes[i] = loadImage("assets/imagen" + i + ".png");
    }
  }
  siguientePantalla() {
    this.pantallaActual++;
    this.mostrarBotonResultado = false; // Restablece el booleano a false
  }

  reiniciarAventura() {
    // Restablecer las variables necesarias para reiniciar la aventura
    this.pantallaActual = 0;
    this.mostrarBotonResultado = false;
    // Reiniciar el juego
    this.juego.reiniciarJuego();
  }

  pantallaInicio() {
    image(this.imagenes[16], 0, 0, width, height);
    textAlign(CENTER, CENTER);
    textSize(45);
    fill(255);
    text("Viaje al centro de la tierra", width / 2, height / 2 - 200);

    textSize(20);
    text("Presiona ENTER para comenzar", width / 2, height / 2 - 100);

    this.botones[0].mostrar();
  }

  // Pantalla de créditos
  pantallaCreditos() {
    image(this.imagenes[15], 0, 0, width, height);
    textAlign(CENTER, CENTER);
    textSize(28);
    fill(255);
    text("Créditos", width / 2, height / 2 - 200);

    textSize(18);
    text("Desarrollado por: Ciro Passalacqua", width / 2, height / 2 - 100);
    text("Legajo 94782/7. Materia; Tecnologia multimedial 1", width / 2, height / 2 - 50);
    text("Obra y autor: Viaje al centro de la tierra, Julio Verne", width / 2, height / 2);

    // Boton para volver a la pantalla inicial
    this.botones[1].mostrar();
  }

  // Pantalla 1
  pantalla1() {
    image(this.imagenes[0], 0, 0, width, height);

    fill(255);
    textAlign(CENTER, CENTER);
    textSize(30);
    text("Alex (tú), Otto (tu tío) y una guía", width / 2, height / 2 - 50);
    text("escalan la montaña indicada", width / 2, height / 2 - 20);
    text("por un pergamino que encontraron", width / 2, height / 2 + 10);
    this.botones[2].mostrar();
  }

  pantalla2() {
    image(this.imagenes[1], 0, 0, width, height);

    textAlign(CENTER, CENTER);
    textSize(18);
    fill(255);
    text("Al entrar en la montaña ven que,", width / 2, height / 2 - 200);
    text("como decía Verne, hay 3 agujeros", width / 2, height / 2 - 170);
    text("por los que entrar, pero 2 de ellos", width / 2, height / 2 - 140);
    text("pueden ser muy peligrosos", width / 2, height / 2 - 110);
    textSize(16);
    fill(255);
    text("Una sombra marca levemente el agujero del medio. ¿Por cuál entras?", width / 2, height / 2 + 50);

    this.botones[3].mostrar();
    this.botones[4].mostrar();
    this.botones[5].mostrar();
  }


  pantalla4() {
    image(this.imagenes[3], 0, 0, width, height);

    textAlign(CENTER, CENTER);
    textSize(18);
    fill(255);
    text("El agujero desemboca en un río", width / 2, height / 2 - 30);
    text("que con la corriente te lleva de vuelta", width / 2, height / 2 - 10);
    text("al pie de la montaña", width / 2, height / 2 + 10);
    textSize(13);
    fill(200, 0, 0);
    text("(Esta mal, pero no tan mal)", width / 2, height / 2 + 130);

    this.botones[7].mostrar();
  }

  pantalla5() {
    image(this.imagenes[4], 0, 0, width, height);

    textAlign(CENTER, CENTER);
    textSize(16);
    fill(255);
    text("Al parecer... ¡Elegiste el correcto!", width / 2, height / 2 - 30);
    text("Junto con tu equipo descienden hacia adentro", width / 2, height / 2 - 10);


    this.botones[8].mostrar();
  }


  pantalla6() {
    image(this.imagenes[5], 0, 0, width, height);

    fill(255);
    textAlign(CENTER, CENTER);
    textSize(16);
    text("Al bajar te enfrentas a una gran decisión\n al ver que hay dos caminos.\n ¿Cual eliges?", width / 2, height / 2);

    this.botones[9].mostrar();
    this.botones[10].mostrar();
  }

  pantalla7() {
    textAlign(LEFT, TOP);

    if (this.juego.juegoTerminado) {
      // Ejecutas el método correspondiente al resultado del juego
      if (this.juego.mensaje.includes("¡Lo lograste!")) {
        this.juego.mostrarGanaste();
      } else if (this.juego.mensaje.includes("Se acabó el tiempo.")) {
        this.juego.mostrarTiempoAgotado();
      } else if (this.juego.mensaje.includes("Los fragmentos de la montaña te dañaron.")) {
        this.juego.mostrarPerdiste();
      }

      this.mostrarBotonResultado = true; // Establece el booleano en true
    }

    if (this.mostrarBotonResultado) {
      // Muestra el botón correspondiente a la situación
      if (this.juego.mensaje.includes("¡Lo lograste!")) {
        this.botones[8].mostrar();
      } else if (this.juego.mensaje.includes("Se acabó el tiempo.")) {
        this.botones[19].mostrar();
      } else if (this.juego.mensaje.includes("Los fragmentos de la montaña te dañaron.")) {
        this.botones[1].mostrar();
      }

      // Reinicia el juego cuando se presiona un botón
      if (this.botones.verificarclick) {
        this.juego.reiniciarJuego();
        this.mostrarBotonResultado = false; // Reinicia el juego, oculta el botón
      }
    } else {
      this.juego.ejecutar();
    }
  }

  pantalla8() {
    image(this.imagenes[7], 0, 0, width, height);

    textAlign(CENTER, CENTER);
    textSize(16);
    fill(255);
    text("Elegiste el camino de la derecha y", width / 2, height / 2 - 200);
    text("luego de caminar un rato llegas a una Playa(segun tu brújula a la costa sur).", width / 2, height / 2 - 180);
    text("Hay un problema y es que segun el diario de Verne,", width / 2, height / 2 - 160);
    text("una tormenta arrazara el lugar y la temperatura subirá muchísimo,", width / 2, height / 2 - 140);
    text("lo que no podrás soportar.", width / 2, height / 2 - 120);
    text("Junto con tus compañeros deciden irse de allí", width / 2, height / 2 - 100);

    this.botones[8].mostrar();
  }

  pantalla9() {
    image(this.imagenes[8], 0, 0, width, height);

    fill(255);
    textAlign(CENTER, CENTER);
    textSize(16);
    text("Cuando entras a una cueva", width / 2, height / 2 - 200);
    text("vez una luz al fondo de ella", width / 2, height / 2 - 180);
    text("¿Preferis asumir el riesgo y entrar,", width / 2, height / 2 - 160);
    text("o seguir descendiendo?", width / 2, height / 2 - 140);

    this.botones[12].mostrar();
    this.botones[13].mostrar();
  }

  pantalla10() {
    image(this.imagenes[9], 0, 0, width, height);

    textAlign(CENTER, CENTER);
    textSize(16);
    fill(255);
    text("Llegas a la costa norte de una playa de la cual,", width / 2, height / 2 - 150);
    text("antes que la temperatura suba", width / 2, height / 2 - 130);
    text("y la tormenta llegue, logras escapar en un barco", width / 2, height / 2 - 110);


    this.botones[14].mostrar();
  }

  pantalla11() {
    image(this.imagenes[10], 0, 0, width, height);

    textAlign(CENTER, CENTER);
    textSize(16);
    fill(255);
    text("La tormenta no fue amable, pero", width / 2, height / 2 - 150);
    text("logran llegar a una orilla con vida tratando de escapar", width / 2, height / 2 - 130);
    text("cuanto antes para que las altas temperaturas no los maten", width / 2, height / 2 - 110);

    this.botones[8].mostrar();
  }

  pantalla12() {
    image(this.imagenes[11], 0, 0, width, height);

    textAlign(CENTER, CENTER);
    textSize(16);
    fill(255);
    text("Encuentras una ultima cueva con la esperanza de", width / 2, height / 2 - 150);
    text("que sea la que Verne menciono, buscando un escape", width / 2, height / 2 - 130);

    this.botones[11].mostrar();
  }

  pantalla13() {
    image(this.imagenes[12], 0, 0, width, height);

    textAlign(CENTER, CENTER);
    textSize(16);
    fill(255);
    text("Ya casi agonizando del calor por la subida de temperatura", width / 2, height / 2 - 150);
    text("tenes que tomar la ULTIMA decision para poder escapar", width / 2, height / 2 - 130);
    text("A tu disposicion solo te queda DINAMITA, pero", width / 2, height / 2 - 110);
    text("te percatas de un HEIZER que podria ser", width / 2, height / 2 - 90);
    text("clave para subir a la superficie", width / 2, height / 2 - 70);

    this.botones[16].mostrar();
    this.botones[17].mostrar();
  }
  // Final 1
  final1() {
    image(this.imagenes[17], 0, 0, width, height);
    textAlign(CENTER, CENTER);
    fill(255);
    textSize(16);
    text("¡La dinamita fue demasiado! El piso de la cueva comienza", width / 2, height / 2 - 150);
    text("a derrumbarse y tu equipo cae con vos.", width / 2, height / 2 - 130);
    text("Tan cerca pero tan lejos...mueren", width / 2, height / 2 - 110);

    // Botón para volver a la pantalla inicial
    this.botones[18].mostrar();
  }

  // Final 2
  final2() {
    image(this.imagenes[14], 0, 0, width, height);

    textAlign(CENTER, CENTER);
    fill(255);
    textSize(16);
    text("¡INCREIBLE! consiguen empujar una calavera de", width / 2, height / 2 - 150);
    text("dinosaurio sobre el Heizer y se suben sobre el. El heizer erupciona y", width / 2, height / 2 - 130);
    text("salen volando por los aires", width / 2, height / 2 - 110);
    text("¡SIIIII!", width / 2, height / 2 - 90);

    // Botón para volver a la pantalla inicial
    this.botones[18].mostrar();
  }

  // Final 3
  final3() {
    image(this.imagenes[2], 0, 0, width, height);

    textAlign(CENTER, CENTER);
    textSize(20);
    fill (255);
    text("¡ELEGISTE EL EQUIVOCADO!", width / 2, height / 2 - 200);

    textAlign(CENTER, CENTER);
    textSize(16);
    fill (0);
    text("El agujero era... ¡UN VOLCAN! Has muerto", width / 2, height / 2);
    text("Clickea el boton para volver al inicio", width / 2, height / 2 + 30);
    // Botón para volver a la pantalla inicial
    this.botones[6].mostrar();
  }
  keyPressed() {
    if (key === 'Enter') {
      if (this.pantallaActual === 0) {
        this.pantallaActual = 1;
      }
    } else if (key === 'p') {
      this.imprimirInformacionPantalla();
    } else {
      this.juego.presionarTecla(key); // Llama al método presionarTecla() de MiniJuego
    }
  }

  mousePressed() {
    if (this.pantallaActual === 0) {
      // Pantalla Inicial
      if (this.botones[0].verificarClick()) {
        this.pantallaActual = 16; // Te lleva a la Pantalla de Créditos
      }
    } else if (this.pantallaActual === 16) {
      // Pantalla de Créditos
      if (this.botones[1].verificarClick()) {
        this.pantallaActual = 0; // Te lleva de vuelta a la Pantalla Inicial
      }
    } else if (this.pantallaActual === 1) {
      // Pantalla 1
      if (this.botones[2].verificarClick()) {
        this.pantallaActual = 2; // Te lleva a la Pantalla 2
      }
    } else if (this.pantallaActual === 2) {
      // Pantalla 2
      if (this.botones[3].verificarClick()) {
        this.pantallaActual = 3; // Te lleva a la Pantalla 3
      } else if (this.botones[4].verificarClick()) {
        this.pantallaActual = 5; // Te lleva a la Pantalla 5
      } else if (this.botones[5].verificarClick()) {
        this.pantallaActual = 4; // Te lleva a la Pantalla 4
      }
    } else if (this.pantallaActual === 3) {
      // Pantalla 3
      if (this.botones[6].verificarClick()) {
        this.pantallaActual = 0; // Te lleva de vuelta a la Pantalla Inicial
      }
    } else if (this.pantallaActual === 5) {
      // Pantalla 5
      if (this.botones[8].verificarClick()) {
        this.pantallaActual = 7; // Te lleva a la Pantalla 7
      }
    } else if (this.pantallaActual === 4) {
      // Pantalla 4
      if (this.botones[7].verificarClick()) {
        this.pantallaActual = 2; // Te lleva de vuelta a la Pantalla 2
      }
    } else if (this.pantallaActual === 6) {
      // Pantalla 6
      if (this.botones[9].verificarClick()) {
        this.pantallaActual = 7; // Te lleva a la Pantalla 7
      } else if (this.botones[10].verificarClick()) {
        this.pantallaActual = 8; // Te lleva a la Pantalla 8
      }
    } else if (this.pantallaActual === 7) {
      // Pantalla 7 y se está mostrando un botón resultado
      if (this.juego.mensaje.includes("¡Lo lograste!")) {
        // Botón de Ganaste
        if (this.botones[8].verificarClick()) {
          this.juego.reiniciarJuego(); // Reinicia el juego
          this.pantallaActual = 9; // Te lleva a la Pantalla 9
        }
      } else if (this.juego.mensaje.includes("Se acabó el tiempo.")) {
        // Botón de Tiempo Agotado
        if (this.botones[19].verificarClick()) {
          this.juego.reiniciarJuego(); // Reinicia el juego
          this.pantallaActual = 10; // Te lleva a la Pantalla 10
        }
      } else if (this.juego.mensaje.includes("Los fragmentos de la montaña te dañaron.")) {
        // Botón de Perdiste
        if (this.botones[1].verificarClick()) {
          this.juego.reiniciarJuego(); // Reinicia el juego
          this.pantallaActual = 5; // Te lleva a la Pantalla 5
          this.mostrarBotonResultado = false;
        }
      }
    } else if (this.pantallaActual === 8) {
      // Pantalla 8
      if (this.botones[14].verificarClick()) {
        this.pantallaActual = 9; // Te lleva a la Pantalla 9
      }
    } else if (this.pantallaActual === 9) {
      // Pantalla 9
      if (this.botones[12].verificarClick()) {
        this.pantallaActual = 12; // Te lleva a la Pantalla 12
      } else if (this.botones[13].verificarClick()) {
        this.pantallaActual = 10; // Te lleva a la Pantalla 10
      }
    } else if (this.pantallaActual === 10) {
      // Pantalla 10
      if (this.botones[14].verificarClick()) {
        this.pantallaActual = 11; // Te lleva a la Pantalla 11
      }
    } else if (this.pantallaActual === 11) {
      // Pantalla 11
      if (this.botones[8].verificarClick()) {
        this.pantallaActual = 12; // Te lleva a la Pantalla 12
      }
    } else if (this.pantallaActual === 12) {
      // Pantalla 12
      if (this.botones[11].verificarClick()) {
        this.pantallaActual = 13; // Te lleva a la Pantalla 13
      }
    } else if (this.pantallaActual === 13) {
      // Pantalla 13
      if (this.botones[16].verificarClick()) {
        this.pantallaActual = 14; // Te lleva a la Pantalla 14
      } else if (this.botones[17].verificarClick()) {
        this.pantallaActual = 15; // Te lleva a la Pantalla 15
      }
    } else if (this.pantallaActual === 14 || this.pantallaActual === 15) {
      // Pantalla 14, Pantalla 15
      if (this.botones[18].verificarClick()) {
        this.pantallaActual = 0; // Te lleva de vuelta a la Pantalla Inicial
        this.reiniciarAventura();
      }
    }
  }

  imprimirInformacionPantalla() {
    console.log("Pantalla actual:", this.pantallaActual);
  }
}
