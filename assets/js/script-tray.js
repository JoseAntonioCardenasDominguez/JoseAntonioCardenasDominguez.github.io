/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


	// cosa para cerrar menu hamburgesa cuando se active y se selecciones una opcion	
	document.addEventListener('DOMContentLoaded', function() {
    // Selecciona todos los enlaces dentro del menú de navegación
    var navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    // Selecciona el botón de alternancia
    var navbarToggler = document.querySelector('.navbar-toggler');

    // Añade un evento de clic a cada enlace
    navLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        // Si el menú está abierto, ciérralo
        if (document.querySelector('.navbar-collapse').classList.contains('show')) {
          navbarToggler.click();
        }
      });
    });
  });