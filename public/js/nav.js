function toggleMenu() {
    // menu hamburguesa
    if(document.getElementById("boton_hamburguer").className == "hamburger hamburger--stand") {
      const menu = document.querySelector(".menu-links");
      const icon = document.querySelector(".hamburger hamburger--stand");
      document.getElementById("boton_hamburguer").className += " is-active";
      openNav();
      // document.getElementById("menu-links").style.maxHeight = "1000px";
    }else{
      const menu = document.querySelector(".menu-links");
      const icon = document.querySelector(".hamburger hamburger--stand");
      document.getElementById("boton_hamburguer").className = "hamburger hamburger--stand";
      closeNav();
      // document.getElementById("menu-links").style.maxHeight = "0";
    }
  }

/* Open */
function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

/* Close */
function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}

