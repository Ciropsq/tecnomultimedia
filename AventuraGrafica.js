class AventuraGrafica {
  constructor(imagenes) {
    this.pantallaActual = 0;
    this.imagenes = imagenes
      this.juego = new MiniJuego(imagenes);
    this.mostrarBotonResultado = false;
  }

  setup() {
    this.botones = []; // Array para almacenar los botones

    this.botones.push(new BotonRedondeado(300, 500, "Créditos"));//0
    this.botones.push(new BotonRedondeado(300, 500, "Volver"));//1
    this.botones.push(new BotonRedondeado(300, 500, "Adentrate en ella"));//2
    this.botones.push(new BotonRedondeado(300, 400, "Izquierda"));//3
    this.botones.push(new BotonRedondeado(300, 460, "Medio"));//4
    this.botones.push(new BotonRedondeado(300, 525, "Derecha"));//5
    this.botones.push(new BotonRedondeado(300, 400, "Inicio"));//6
    this.botones.push(new BotonRedondeado(300, 500, "Volver a la montaña"));//7
    this.botones.push(new BotonRedondeado(300, 400, "Siguiente"));//8
    this.botones.push(new BotonRedondeado(150, 400, "Camino Izquierda"));//9
    this.botones.push(new BotonRedondeado(450, 400, "Camino Derecha"));//10
    this.botones.push(new BotonRedondeado(300, 400, "Entrar"));//11
    this.botones.push(new BotonRedondeado(300, 335, "Seguir descendiendo"));//12
    this.botones.push(new BotonRedondeado(300, 450, "Ir hacia la luz"));//13
    this.botones.push(new BotonRedondeado(300, 400, "Navegar"));//14
    this.botones.push(new BotonRedondeado(300, 400, "Subir al barco"));//15
    this.botones.push(new BotonRedondeado(300, 400, "Utilizar la dinamita"));//16
    this.botones.push(new BotonRedondeado(300, 450, "Usar el Heizer"));//17
    this.botones.push(new BotonRedondeado(300, 400, "Volver al inicio"));//18
    this.botones.push(new BotonRedondeado(300, 400, "Continuar"));//19

    this.pantallas = [];

    // Pantalla de inicio
    const pantallaInicio = new Pantalla(this.imagenes[16], [this.botones[0]], ["", "", "La Aventura", "Presiona ENTER para comenzar"]);
    this.pantallas[0] = (pantallaInicio);

    // Pantalla de créditos
    const pantallaCreditos = new Pantalla(this.imagenes[15], [this.botones[1]], ["Créditos", "Desarrollado por: Ciro Passalacqua", "Legajo 94782/7. Materia: Tecnologia multimedial 1", "Obra y autor: Viaje al centro de la tierra, Julio Verne"]);
    this.pantallas[16] = (pantallaCreditos);

    // Pantalla 1
    const pantalla1 = new Pantalla(this.imagenes[0], [this.botones[2]], ["Alex (tú), Otto (tu tío) y una guía", "escalan la montaña indicada", "por un pergamino que encontraron"]);
    this.pantallas[1] = (pantalla1);

    // Pantalla 2
    const pantalla2 = new Pantalla(this.imagenes[1], [
      this.botones[3],
      this.botones[4],
      this.botones[5],
      ], ["Al entrar en la montaña ven que,", "como decía Verne, hay 3 agujeros", "por los que entrar, pero 2 de ellos", "pueden ser muy peligrosos", "Una sombra marca levemente el agujero del medio.", "¿Por cuál entras?"]);
    this.pantallas[2] = (pantalla2);

    // Pantalla 4
    const pantalla4 = new Pantalla(this.imagenes[3], [this.botones[7]], ["El agujero desemboca en un río", "que con la corriente te lleva de vuelta", "al pie de la montaña", "(Esta mal, pero no tan mal)"]);
    this.pantallas[4] = (pantalla4);

    // Pantalla 5
    const pantalla5 = new Pantalla(this.imagenes[4], [this.botones[8]], ["Al parecer... ¡Elegiste el correcto!", "Junto con tu equipo descienden hacia adentro"]);
    this.pantallas[5] = (pantalla5);

    // Pantalla 6
    const pantalla6 = new Pantalla(this.imagenes[5], [this.botones[9], this.botones[10]], ["Al bajar te enfrentas a una gran decisión", "al ver que hay dos caminos.", "¿Cual eliges?"]);
    this.pantallas[6] = (pantalla6);

    // Pantalla 8
    const pantalla8 = new Pantalla(this.imagenes[7], [this.botones[8]], ["Elegiste el camino de la derecha y", "luego de caminar un rato llegas a una playa(según tu brújula a la costa sur).", "Hay un problema y es que según el diario de Verne,", "una tormenta arrazará el lugar y la temperatura subirá muchísimo,", "lo que no podrás soportar.", "Junto con tus compañeros deciden irse de allí"]);
    this.pantallas[8] = (pantalla8);

    // Pantalla 9
    const pantalla9 = new Pantalla(this.imagenes[8], [
      this.botones[12],
      this.botones[13],
      ], ["Cuando entras a una cueva", "ves una luz al fondo de ella", "¿Prefieres asumir el riesgo y entrar,", "o seguir descendiendo?"]);
    this.pantallas[9] = (pantalla9);

    // Pantalla 10
    const pantalla10 = new Pantalla(this.imagenes[9], [this.botones[14]], ["Llegas a la costa norte de una playa de la cual,", "antes que la temperatura suba", "y la tormenta llegue, logras escapar en un barco"]);
    this.pantallas[10] = (pantalla10);

    // Pantalla 11
    const pantalla11 = new Pantalla(this.imagenes[10], [this.botones[8]], ["La tormenta no fue amable, pero", "logran llegar a una orilla con vida tratando de escapar", "cuanto antes para que las altas temperaturas no los maten"]);
    this.pantallas[11] = (pantalla11);

    // Pantalla 12
    const pantalla12 = new Pantalla(this.imagenes[11], [this.botones[11]], ["Encuentras una última cueva con la esperanza de", "que sea la que Verne mencionó, buscando un escape"]);
    this.pantallas[12] = (pantalla12);

    // Pantalla 13
    const pantalla13 = new Pantalla(this.imagenes[12], [
      this.botones[16],
      this.botones[17],
      ], ["Ya casi agonizando del calor por la subida de temperatura", "tienes que tomar la ÚLTIMA decisión para poder escapar", "A tu disposición solo te queda DINAMITA, pero", "te das cuenta de un HEIZER que podría ser", "clave para subir a la superficie"]);
    this.pantallas[13] = (pantalla13);

    // Pantalla Final 1
    const final1 = new Pantalla(this.imagenes[17], [this.botones[18]], ["¡La dinamita fue demasiado! El piso de la cueva comienza", "a derrumbarse y tu equipo cae contigo.", "Tan cerca pero tan lejos... mueren"]);
    this.pantallas[14] = (final1);

    // Pantalla Final 2
    const final2 = new Pantalla(this.imagenes[14], [this.botones[18]], ["¡INCREÍBLE! consiguen empujar una calavera de", "dinosaurio sobre el Heizer y se suben sobre él.", "El Heizer erupciona y", "salen volando por los aires", "¡SIIIII!"]);
    this.pantallas[15] = (final2);

    // Pantalla Final 3
    const final3 = new Pantalla(this.imagenes[2], [this.botones[6]], ["¡ELEGISTE EL EQUIVOCADO!", "El agujero era... ¡UN VOLCÁN! Has muerto", "Haz clic en el botón para volver al inicio"]);
    this.pantallas[3] = (final3);

    const ganasteJuego = new Pantalla(this.imagenes[18], [this.botones[8]], ["", "La expedición continúa con éxito!"]);
    this.pantallas[17] = (ganasteJuego);

    const perdisteJuego = new Pantalla(this.imagenes[20], [this.botones[1]], ["Los fragmentos de la montaña te dañaron", "Vuelve a ingresar al hoyo."]);
    this.pantallas[18] = (perdisteJuego);

    const perdisteJuegoTiempo = new Pantalla(this.imagenes[20], [this.botones[19]], ["Se acabó el tiempo", "La cueva se derrumba, pero vez una luz"]);
    this.pantallas[19] = (perdisteJuegoTiempo);
  }

  draw() {
    switch (this.pantallaActual) {
    case 0:
      this.pantallas[0].mostrar();
      textSize(40);
      fill(255);
      text("Viaje al centro de la tierra", 300, 80);
      break;
    case 1:
      this.pantallas[1].mostrar();
      break;
    case 2:
      this.pantallas[2].mostrar();
      break;
    case 3:
      this.pantallas[3].mostrar();
      break;
    case 4:
      this.pantallas[4].mostrar();
      break;
    case 5:
      this.pantallas[5].mostrar();
      break;
    case 6:
      this.pantallas[6].mostrar();
      break;
    case 7:
      this.pantalla7();
      break;
    case 17:
      this.pantallas[17].mostrar();
      textSize(30);
      fill(255);
      text("¡LO LOGRASTE!", 300, 200);
      break;
    case 18:
      this.pantallas[18].mostrar();
      break;
    case 19:
      this.pantallas[19].mostrar();
      break;
    case 8:
      this.pantallas[8].mostrar();
      break;
    case 9:
      this.pantallas[9].mostrar();
      break;
    case 10:
      this.pantallas[10].mostrar();
      break;
    case 11:
      this.pantallas[11].mostrar();
      break;
    case 12:
      this.pantallas[12].mostrar();
      break;
    case 13:
      this.pantallas[13].mostrar();
      break;
    case 14:
      this.pantallas[14].mostrar();
      break;
    case 15:
      this.pantallas[15].mostrar();
      break;
    case 16:
      this.pantallas[16].mostrar();
      break;
    default:
      break;
    }
  }

  reiniciarAventura() {
    // Restablecer las variables necesarias para reiniciar la aventura
    this.pantallaActual = 0;
    this.mostrarBotonResultado = false;
    // Reiniciar el juego
    this.juego.reiniciarJuego();
  }

  pantalla7() {
    textAlign(LEFT, TOP);

    if (this.juego.juegoTerminado) {
      // Ejecutas el método correspondiente al resultado del juego
      if (this.juego.mensaje.includes("¡LO LOGRASTE!")) {
        this.pantallaActual = 17;
      } else if (this.juego.mensaje.includes("Se acabó el tiempo.")) {
        this.pantallaActual = 19;
      } else if (this.juego.mensaje.includes("Los fragmentos de la montaña te dañaron.")) {
        this.pantallaActual = 18;
      }
    } else {
      this.juego.ejecutar();
    }
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
    } else if (this.pantallaActual === 17) {
      // Pantalla 7 y se está mostrando un botón resultado
      if (this.juego.mensaje.includes("¡LO LOGRASTE!")) {
        // Botón de Ganaste
        if (this.botones[8].verificarClick()) {
          this.juego.reiniciarJuego(); // Reinicia el juego
          this.pantallaActual = 9; // Te lleva a la Pantalla 9
        }
      }
    } else if (this.pantallaActual === 19) {
      if (this.juego.mensaje.includes("Se acabó el tiempo.")) {
        // Botón de Tiempo Agotado
        if (this.botones[19].verificarClick()) {
          this.juego.reiniciarJuego(); // Reinicia el juego
          this.pantallaActual = 10; // Te lleva a la Pantalla 10
        }
      }
    } else if (this.pantallaActual === 18) {
      if (this.juego.mensaje.includes("Los fragmentos de la montaña te dañaron.")) {
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
