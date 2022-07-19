/*-----------------------------------------------------------------------------------*/
 function alta() {
    borra();

    x = document.querySelectorAll(".alta, .pestana_alta");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "inline-flex";
    }

    x = document.querySelectorAll(".graba");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "inline-flex";
      x[i] = document.getElementById("boton_m").innerHTML= "Grabar";

    }

    x = document.querySelectorAll(".alta_b");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "block";
      x[i].style.border = "1px solid white";
    }
}
/*-----------------------------------------------------------------------------------*/
 function modificar() {
    borra();

    x = document.querySelectorAll(".modif, .pestana_alta");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "inline-flex";
    }

    x = document.querySelectorAll(".graba");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "inline-flex";
      x[i] = document.getElementById("boton_m").innerHTML= "Modificar";

    }

    x = document.querySelectorAll(".modifica_b");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "block";
      x[i].style.border = "1px solid white";
    }
}
/*-----------------------------------------------------------------------------------*/
function baja() {
    borra();
    x = document.querySelectorAll(".baja, .pestana_alta");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "inline-flex";
    }

    x = document.querySelectorAll(".graba");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "inline-flex";

      x[i] = document.getElementById("boton_m").innerHTML= "Eliminar";
   }

    x = document.querySelectorAll(".baja_b");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "block";
      x[i].style.border = "1px solid white";
    }
}
/*-----------------------------------------------------------------------------------*/
function consulta() {
  borra();
  x = document.querySelectorAll(".contenedor_tabla, .tabla1");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "inline-flex";
  }
  x = document.querySelectorAll(".consulta_b");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "block";
    x[i].style.border = "1px solid white";
  }
} 
/*-----------------------------------------------------------------------------------*/


function borra() {
    let x, j;
    x = document.querySelectorAll(".alta, .modif, .baja, .tabla1, .graba, .contenedor_tabla, .pestana_alta"); 
    for (j = 0; j < x.length; j++) {
      x[j].style.display = "none";
      x[j].value = "";
    }
    x = document.querySelectorAll(".alta_b, .modifica_b, .baja_b, .consulta_b");
    for (i = 0; i < x.length; i++) {
      // // x[i].style.display = "block";
      x[i].style.border = "none";
    }
  }
  /*-----------------------------------------------------------------------------------*/



  var mediaqueryList = window.matchMedia("(max-width: 576px)");
  mediaqueryList.addListener(function (EventoMediaQueryList) {

    x = document.querySelectorAll(".pestana_alta, .contenedor_tabla");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }

    

  });

 