//-----------------------------------------------------------------------------------
//funcion DOM filtra componentes de la lista
//-----------------------------------------------------------------------------------
function borra() { //funcion para borrar los componentes que se muestran
    let x, i;
    x = document.querySelectorAll(".led, .dis, .tra, .ser, .gra"); //obtengo todos los componentes
    for (i = 0; i < x.length; i++) { //recorro todos los componentes
      x[i].style.display = "none"; //oculto los componentes
    }
  }
  
  function todo() { //funcion para mostrar todos los componentes
    alert("TODO");
    var x, i;
    x = document.querySelectorAll(".led,.dis, .tra, .ser, .gra"); //obtengo todos los componentes
    for (i = 0; i < x.length; i++) { //recorro todos los componentes
      x[i].style.display = "flex"; //muestro los componentes
    }
    // const navMenu2 = document.querySelector(".category_list"); //obtengo el elemento nav-menu
    // navMenu2.classList.toggle("category_list__visible");
  }
  
  function leds() { //funcion para mostrar los componentes led
    alert("LEDS");
    borra(); //borro los componentes
    let x, i;
    x = document.querySelectorAll(".led"); //obtengo los componentes led
    for (i = 0; i < x.length; i++) { //recorro los componentes 
      x[i].style.display = "flex"; //muestro los componentes led
    }
    // const navMenu2 = document.querySelector(".category_list"); //obtengo el elemento nav-menu
    // navMenu2.classList.toggle("category_list__visible");
  }
  
  function disp() { //funcion para mostrar los componentes display
    alert("DISPLAY");

    borra(); //borro los componentes
    var x, i;
    x = document.querySelectorAll(".dis"); //obtengo los componentes display
    for (i = 0; i < x.length; i++) { //recorro los componentes
      x[i].style.display = "flex"; //muestro los componentes display
    }
    // const navMenu2 = document.querySelector(".category_list"); //obtengo el elemento nav-menu
    // navMenu2.classList.toggle("category_list__visible");
  }
  
  function tran() { //funcion para mostrar los componentes transistores
    borra(); //borro los componentes
    var x, i;
    x = document.querySelectorAll(".tra"); //obtengo los componentes transistores
    for (i = 0; i < x.length; i++) { //recorro los componentes
      x[i].style.display = "flex"; //muestro los componentes transistores
    }
    // const navMenu2 = document.querySelector(".category_list"); //obtengo el elemento nav-menu
    // navMenu2.classList.toggle("category_list__visible");
  }
  
  function serv() { //funcion para mostrar los componentes transistores
    borra(); //borro los componentes
    var x, i;
    x = document.querySelectorAll(".ser"); //obtengo los componentes servidores
    for (i = 0; i < x.length; i++) { //recorro los componentes
      x[i].style.display = "flex"; //muestro los componentes servidores
    }
    // const navMenu2 = document.querySelector(".category_list"); //obtengo el elemento nav-menu
    // navMenu2.classList.toggle("category_list__visible");
  }
  
  function gral() { //funcion para mostrar los componentes transistores
    borra(); //borro los componentes
    var x, i;
    x = document.querySelectorAll(".gra"); //obtengo los componentes generales
    for (i = 0; i < x.length; i++) { //recorro los componentes
      x[i].style.display = "flex"; //muestro los componentes generales
    }
    // const navMenu2 = document.querySelector(".category_list"); //obtengo el elemento nav-menu
    // navMenu2.classList.toggle("category_list__visible");
  }