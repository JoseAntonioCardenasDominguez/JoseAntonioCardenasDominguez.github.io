 
 
// ===========================================================================================
// cosa para cerrar menu chacarero cuando se active y se selecciones una opcion	
// ya no aplica porque las opciones son link a otras paginas.  Se mantiene por si se agregan
// ============================================================================================
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
  
// =================================
// jquery para formulario contacto
// =================================
    document.addEventListener('DOMContentLoaded', (event) => {
      const form = document.getElementById('contact-form');

      form.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Formulario enviado');
        // Aquí  agregar   lógica para enviar el formulario 
        form.reset();
      });
    });
	
// ========================== 
// carga de bienvenido
// ==========================
$(document).ready(function() {
    var texto2 = 
        "<div>" +
        "<h4><u class='HabilidadFuenteTit'>Bienvenido</u></h4>" +
        "<p id='yoparrafo' class='HabilidadFuenteText'>" +
        "&nbsp;&nbsp;&nbsp; Soy titulado en análisis de sistemas  . " +
        "Lo que más me motiva en mi trabajo es la oportunidad de resolver problemas " +
        "creando soluciones innovadoras y la eficiencia de una organización. " +
        "Por último, colaborar con equipos multidisciplinarios y compartir conocimientos también es una gran fuente " +
        "de motivación para mí, ya que me permite crecer tanto profesional como personalmente." +
        "</p>" +
        "</div>";

    const $outputContainer = $("#OutputBienvenido");
    let i = 0;

    function typeWriter() {
        if (i < texto2.length) {
            // Agregar un carácter del HTML a la vez
            $outputContainer.html(texto2.substring(0, i + 1));
            i++;
            setTimeout(typeWriter, 5);
        }
    }

    $outputContainer.empty(); // Limpiar el contenedor antes de empezar
    typeWriter();
});

// =============================== //  
// Ajuste de velocidad de carrusel //
// =============================== //


var myCarousel1 = document.querySelector('#carouselExampleFade');
var carousel1 = new bootstrap.Carousel(myCarousel1, {
  interval: 500, // Intervalo de 1000 milisegundos (3 segundos)
  ride: 'carousel1'
});
 
 
var myCarousel2 = document.querySelector('#carouselExampleFade2');
var carousel2 = new bootstrap.Carousel(myCarousel2, {
  interval: 1500, // Intervalo de 2000 milisegundos (3 segundos)
  ride: 'carousel2'
});

var myCarousel3 = document.querySelector('#carouselExampleFade3');
var carousel3 = new bootstrap.Carousel(myCarousel3, {
  interval: 1900, // Intervalo de 3000 milisegundos (3 segundos)
  ride: 'carousel3'
});
 

//
//=====================================================//
// hacer scroll a la pantalla hasta llegar arriba    ==// 
//=====================================================//
  document.getElementById("scrollButton").addEventListener("click", function() {
        window.scrollTo({
            top: 0,				 // Desplaza hasta el tope de la página
            behavior: 'smooth'	 // Efecto suave
        });
    });
	
	
//
//====================================================================================//
//  jquery para trayectoria , se automatiza efecto mouson para que parezca girnalda   //
// ================================================================================== //
