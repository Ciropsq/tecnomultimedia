class MiniJuego {
  constructor() {
    this.explorador = new Explorador();
    this.recursos = [];
    this.rocas = [];
    this.vidas = 3;
    this.recursosRecolectados = 0;
    this.objetivoRecursos = 5;
    this.juegoTerminado = false;
    this.mensaje = "";
    this.inicio = true;
    this.juegoEnEjecucion = false;
    this.tiempoInicial = millis();
    this.tiempoLimite = 20;
    this.cueva = loadImage('assets/cueva.jpg');
    this.imgInicio = loadImage('assets/Imginicio.jpg');
    this.imgGanaste = loadImage('assets/ImgGanaste.jpg');
    this.imgPerdiste = loadImage('assets/ImgPerdiste.jpg');

    for (let i = 0; i < 2; i++) {
      this.recursos.push(new Recurso());
      this.rocas.push(new Roca());
    }
  }

  ejecutar() {
    console.log("Dibujando el juego...");

    if (this.juegoEnEjecucion) {
      image(this.cueva, 0, 0, width, height);

      if (!this.juegoTerminado) {
        this.mostrarEstado();
        this.explorador.mostrar();
        this.manejarRecursos();
        this.manejarRocas();
        this.mostrarMensaje();
        this.verificarTiempoAgotado();
        this.verificarVidasAgotadas();
      } else {
        if (this.mensaje.includes("¡Lo lograste!")) {
          this.mostrarGanaste();
        } else if (this.mensaje.includes("Se acabó el tiempo.")) {
          this.mostrarTiempoAgotado();
        } else if (this.mensaje.includes("Los fragmentos de la montaña te dañaron.")) {
          this.mostrarPerdiste();
        }
      }
    } else {
      this.pantallaInicio();
    }
  }


  presionarTecla(tecla) {
    if (this.juegoEnEjecucion) {
      // Si estamos en el juego
      if (!this.juegoTerminado) {
        // Solo permitir movimiento si el juego no termino
        if (tecla === 'a' || tecla === 'A') {
          this.explorador.mover(-40);
        } else if (tecla === 'd' || tecla === 'D') {
          this.explorador.mover(40);
        }
      }
    } else {
      if (this.inicio) {
        if (tecla === 'I' || tecla === 'i') {
          this.juegoEnEjecucion = true;
          this.tiempoInicial = millis();
          console.log("El juego está en ejecución:", this.juegoEnEjecucion);
        }
      }
    }
  }


  pantallaInicio() {
    textAlign(LEFT, TOP);
    image(this.imgInicio, 0, 0, width, height);
    fill(255);
    textSize(55);
    text("Viaje al", 50, 80);
    textSize(55);
    text("centro de la Tierra", 50, 140);
    textSize(20);
    text("(el minijuego)", 230, 200);
    text("- Instrucciones:", 50, 240);
    textSize(20);
    text("Usa 'A' y 'D' para moverte.", 50, 270);
    text("Recolecta los recursos que te lanzan tus compañeros.", 50, 300);
    text("Evita las rocas que se desprenden de la cueva", 50, 330);
    text("Presiona 'i' para empezar.", 50, 390);
    text("Tienes 12s ¡La cueva se derrumba!", 50, 360);
  }


  mostrarEstado() {
    textSize(20);
    fill(255);
    text('Vidas: ' + this.vidas, 10, 30);
    text('Recursos: ' + this.recursosRecolectados + ' / ' + this.objetivoRecursos, 10, 60);

    let tiempoTranscurrido = (millis() - this.tiempoInicial) / 1000;
    let tiempoRestante = this.tiempoLimite - tiempoTranscurrido;

    if (tiempoRestante < 0) {
      tiempoRestante = 0;
    }

    text('Tiempo: ' + tiempoRestante.toFixed(1) + ' s', 10, 90);
  }

  iniciarJuegoDesdeInicio() {
    this.pantallaInicio();
    this.juegoEnEjecucion = true;
    this.juegoTerminado = false
      this.tiempoInicial = millis();
    console.log("El juego está en ejecución:", this.juegoEnEjecucion);
  }

  manejarRecursos() {
    for (let i = 0; i < this.recursos.length; i++) {
      let recurso = this.recursos[i];
      recurso.mostrar();
      recurso.mover();
      if (this.explorador.intersecta(recurso)) {
        this.recursosRecolectados++;
        recurso.reiniciar();
      }
      if (recurso.y > height) {
        recurso.reiniciar();
      }
    }

    if (this.recursosRecolectados >= this.objetivoRecursos) {
      this.juegoTerminado = true;
      this.mensaje = "¡Lo lograste!\nLa expedición continúa con éxito!\nPresiona R si queres reiniciar";
    }
  }

  manejarRocas() {
    for (let i = 0; i < this.rocas.length; i++) {
      let roca = this.rocas[i];
      roca.mostrar();
      roca.mover();
      if (this.explorador.intersecta(roca)) {
        this.vidas--;
        roca.reiniciar();
      }
      if (roca.y > height) {
        roca.reiniciar();
      }
    }
  }

  mostrarMensaje() {
    fill(0);
    textSize(32);
    text(this.mensaje, 220, height / 2);
  }

  verificarTiempoAgotado() {
    let tiempoTranscurrido = (millis() - this.tiempoInicial) / 1000;
    if (tiempoTranscurrido >= this.tiempoLimite) {
      this.juegoTerminado = true;
      this.mensaje = "Se acabó el tiempo.\nLa cueva se derrumba, pero vez una luz\nPresiona R si queres reiniciar";
    }
  }

  verificarVidasAgotadas() {
    if (this.vidas <= 0) {
      this.juegoTerminado = true;
      this.mensaje = "Los fragmentos de la montaña te dañaron.\nVuelve a ingresar al hoyo.\nPresiona R si queres reiniciar";
    }
  }


  mostrarGanaste() {
    if (this.juegoTerminado) {
      image(this.imgGanaste, 0, 0, width, height);
      textSize(30);
      fill(0, 255, 0);
      text("¡Lo lograste!\nLa expedición continúa con éxito!\nPresiona R si queres reiniciar", 50, 160);
    }
  }

  mostrarTiempoAgotado() {
    if (this.juegoTerminado) {
      image(this.imgPerdiste, 0, 0, width, height);
      textSize(30);
      fill(255, 0, 0);
      text("Se acabó el tiempo.\nLa cueva se derrumba, pero vez una luz\nPresiona R si queres reiniciar", 30, 160);
    }
  }

  mostrarPerdiste() {
    if (this.juegoTerminado) {
      image(this.imgPerdiste, 0, 0, width, height);
      textSize(30);
      fill(255, 0, 0);
      text("Los fragmentos de la montaña te dañaron.\nVuelve a ingresar al hoyo.\nPresiona R si queres reiniciar", 30, 160);
    }
  }



  reiniciarJuego() {
    console.log("Reiniciando el juego...");
    this.juegoTerminado = false;
    this.vidas = 3;
    this.recursosRecolectados = 0;
    this.tiempoInicial = millis();
    this.explorador.x = width / 2;
    this.iniciarJuegoDesdeInicio();

    for (let i = 0; i < this.recursos.length; i++) {
      this.recursos[i].reiniciar();
    }

    for (let i = 0; i < this.rocas.length; i++) {
      this.rocas[i].reiniciar();
    }

    this.mensaje = "";
    this.inicio = false;
  }
}
