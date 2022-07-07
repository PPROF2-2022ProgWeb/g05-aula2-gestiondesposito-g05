/*-----------------------------------------------------------------------------------*/
function idioma_espanol() {
    cambia_idioma();
    x = document.querySelectorAll(".esp");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "flex";
    }
}
/*-----------------------------------------------------------------------------------*/
function idioma_ingles() {
    cambia_idioma();
    x = document.querySelectorAll(".eng");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "flex";
    }
}
/*-----------------------------------------------------------------------------------*/
function cambia_idioma() {
    let x, j;
    x = document.querySelectorAll(".esp, .eng"); 
    for (j = 0; j < x.length; j++) {
      x[j].style.display = "none";
    }
  }
  /*-----------------------------------------------------------------------------------*/