/*-----------------------------------------------------------------------------------*/
function idioma_espanol() {
    cambia_idioma();
    x = document.querySelectorAll(".esp");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "block";
    }
}
/*-----------------------------------------------------------------------------------*/
function idioma_ingles() {
    cambia_idioma();
    x = document.querySelectorAll(".eng");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "block";
    }
}
/*-----------------------------------------------------------------------------------*/
function idioma_portugues() {
    cambia_idioma();
    x = document.querySelectorAll(".port");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "block";
    }
}

/*-----------------------------------------------------------------------------------*/
function cambia_idioma() {
    let x, j;
    x = document.querySelectorAll(".esp, .eng, .port"); 
    for (j = 0; j < x.length; j++) {
      x[j].style.display = "none";
    }
  }
  /*-----------------------------------------------------------------------------------*/