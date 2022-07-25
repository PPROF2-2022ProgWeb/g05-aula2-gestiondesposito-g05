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

 /*-----------------------------------------------------------------------------------*/

  let productos = new Array(20);
  productos[0] = {codigo: "1", descripcion: "", precio: "", stock: ""};
  productos[1] = {codigo: "2", descripcion: "", precio: "", stock: ""};
  productos[2] = {codigo: "3", descripcion: "", precio: "", stock: ""};
  productos[3] = {codigo: "4", descripcion: "", precio: "", stock: ""};
  productos[4] = {codigo: "5", descripcion: "", precio: "", stock: ""};
  productos[5] = {codigo: "6", descripcion: "", precio: "", stock: ""};
  productos[6] = {codigo: "7", descripcion: "", precio: "", stock: ""};
  productos[7] = {codigo: "8", descripcion: "", precio: "", stock: ""};
  productos[8] = {codigo: "9", descripcion: "", precio: "", stock: ""};
  

  let tablaProducto = document.getElementById("productos");
  let cuerpoTabla = document.createElement("tbody");

  productos.forEach(p=> {
    let fila = document.createElement("tr");

    let td=document.createElement("td");    
    td.innerText = p.codigo;
    fila.appendChild(td);

    td = document.createElement("td");
    td.innerText = p.descripcion;
    fila.appendChild(td);

    td = document.createElement("td");
    td.innerText = p.ptrcio;
    fila.appendChild(td);

    td = document.createElement("td");
    td.innerText = p.stock;
    fila.appendChild(td);



    cuerpoTabla.appendChild(fila);


  });

  tablaProducto.appendChild(cuerpoTabla);

  
