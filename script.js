document.addEventListener('DOMContentLoaded', function () {

    var menuIcon = document.getElementById('menu-nav');
    var closeIcon = document.getElementById('cerrar');
    var links = document.querySelector('.links');

    function toggleMenu() {
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'block';
        links.style.display = 'grid';
    }

    function toggleClose() {
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
        links.style.display = 'none';
    }

    menuIcon.addEventListener('click', toggleMenu);
    closeIcon.addEventListener('click', toggleClose);

    function checkWindowSize() {
        if (window.innerWidth >= 854) {
            
            menuIcon.style.display = 'none';
            closeIcon.style.display = 'none';
            links.style.display = 'flex';
        } else {
            
            if (closeIcon.style.display === 'none') {
                links.style.display = 'none';
                menuIcon.style.display = 'block';
            }
        }
    }

    checkWindowSize();

    window.addEventListener('resize', checkWindowSize);

});

document.addEventListener('DOMContentLoaded', function () {

    var opcionDelDia = document.getElementById('opcion-del-dia');
    var opcionFrituras = document.getElementById('opcion-frituras');
    var opcionHamburguesas = document.getElementById('opcion-hamburguesas');

    var contenidoPrincipal = document.querySelector('.menu-principal');
    var contenidoFrituras = document.querySelector('.menu-frituras');
    var contenidoBurguers = document.querySelector('.menu-hamburguesas');

    function mostrarPrincipal(){
        contenidoFrituras.style.display = 'none';
        contenidoBurguers.style.display = 'none';
        contenidoPrincipal.style.display = 'grid';
    }

    function mostrarFrituras(){
        contenidoPrincipal.style.display = 'none';
        contenidoBurguers.style.display = 'none';
        contenidoFrituras.style.display = 'grid';
    }

    function mostrarBurguers(){
        contenidoPrincipal.style.display = 'none';
        contenidoFrituras.style.display = 'none';
        contenidoBurguers.style.display = 'grid';
    }

    opcionDelDia.addEventListener('click', mostrarPrincipal);
    opcionFrituras.addEventListener('click', mostrarFrituras);
    opcionHamburguesas.addEventListener('click', mostrarBurguers);

});


const btn = document.querySelector('.btn-icon');

btn.addEventListener('click', () =>{
    console.log("hola");
})