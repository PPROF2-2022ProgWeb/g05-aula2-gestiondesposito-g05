/*-----------------------------------------------------------------------------------*/
 function alta() {
    borra();

    x = document.querySelectorAll(".alta");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "inline-flex";
    }
}
/*-----------------------------------------------------------------------------------*/
 function modificar() {
    borra();

    x = document.querySelectorAll(".modif");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "inline-flex";
    }

}
/*-----------------------------------------------------------------------------------*/
function baja() {
    borra();
    x = document.querySelectorAll(".baja");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "inline-flex";
     
    }
}
function consulta() {
  borra();
}
/*-----------------------------------------------------------------------------------*/


function borra() {
    let x, j;
    x = document.querySelectorAll(".alta, .modif, .baja"); 
    for (j = 0; j < x.length; j++) {
      x[j].style.display = "none";
      x[j].value = "";
    }
  }
  /*-----------------------------------------------------------------------------------*/