class MiniJuego {
  constructor() {
    this.explorador = new Explorador();
    this.recursos = [];
    this.rocas = [];
    this.vidas = 3;
    this.recursosRecolectados = 0;
    this.objetivoRecursos = 5;
    this.juegoTerminado = false;
    this.mensaje = "Presiona 'I' para empezar";
    this.inicio = true;
    this.tiempoInicial = millis();
    this.tiempoLimite = 12;
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
    if (this.inicio) {
      this.pantallaInicio();
    } else {
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
        this.mostrarPantallaResultado();
      }
    }
  }

  keyPressed(tecla) {
    if (this.inicio) {
      // Si estamos en la pantalla de inicio, 'I' inicia el juego
      if (tecla === 'I' || tecla === 'i') {
        this.inicio = false;
        this.reiniciarJuego();
      }
    } else if (!this.juegoTerminado) {
      if (tecla === 'a' || tecla === 'A') {
        this.explorador.mover(-40);
      } else if (tecla === 'd' || tecla === 'D') {
        this.explorador.mover(40);
      }
    } else {
      // Permitir reiniciar el juego con 'R' si el juego terminó
      if (tecla === 'R' || tecla === 'r') {
        this.reiniciarJuego();
      }
    }
  }

  pantallaInicio() {
    image(this.imgInicio, 0, 0, width, height);
    fill(255);
    textSize(55);
    text("Viaje al", 50, 100);
    textSize(55);
    text("centro de la Tierra", 50, 160);
    textSize(20);
    text("(el minijuego)", 230, 185);
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
      this.mensaje = "¡Lo lograste!\nLa expedición continúa con éxito!\nPresiona R para reiniciar";
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
      this.mensaje = "Se acabó el tiempo.\nLa cueva se derrumba y quedas atrapado\nPresiona R para reiniciar";
    }
  }

  verificarVidasAgotadas() {
    if (this.vidas <= 0) {
      this.juegoTerminado = true;
      this.mensaje = "Los fragmentos de la montaña te dañaron.\nLa expedición se cancela.\nPresiona R para reiniciar";
    }
  }

  mostrarPantallaResultado() {
  if (this.juegoTerminado) {
    image(this.cueva, 0, 0, width, height);
    fill(255);
    textSize(32);

    if (this.mensaje.includes("¡Lo lograste!")) {
      image(this.imgGanaste, 0, 0, width, height);
      textSize(30);
      fill(0, 255, 0);
      text("¡Lo lograste!\nLa expedición continúa con éxito!\nPresiona R para reiniciar", 50, 160);
    } else if (this.mensaje.includes("Se acabó el tiempo.") || this.mensaje.includes("Los fragmentos de la montaña te dañaron.")) {
      image(this.imgPerdiste, 0, 0, width, height);
      textSize(30);
      fill(255, 0, 0);
      text(this.mensaje, 30, 160);
    }
  }
}

  reiniciarJuego() {
    this.juegoTerminado = false;
    this.vidas = 3;
    this.recursosRecolectados = 0;
    this.tiempoInicial = millis();
    this.explorador.x = width / 2;

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
