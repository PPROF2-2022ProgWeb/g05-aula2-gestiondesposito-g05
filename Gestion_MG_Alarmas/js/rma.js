
















var mediaqueryList = window.matchMedia("(max-width: 576px)");
mediaqueryList.addListener(function (EventoMediaQueryList) {

  x = document.querySelectorAll("");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  

});
