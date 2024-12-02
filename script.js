let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

// Inicia EmailJS
(function() {
    emailjs.init("Eew63blgQ4iYVXFvS"); // Inicializa correctamente EmailJS con tu clave pública
    console.log("EmailJS inicializado correctamente");
})();

// Maneja el envío del formulario
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el comportamiento por defecto del formulario

    // Envia el formulario a través de EmailJS
    emailjs.sendForm('service_melani', 'melani', this)
        .then(function() {
            // Mensaje de éxito
            const formStatus = document.getElementById('form-status');
            formStatus.innerText = 'Mensaje enviado con éxito!';
            formStatus.className = 'success'; // Agrega clase de éxito
            formStatus.style.display = 'block'; // Muestra el cuadro
            
            // Limpia el formulario
            document.getElementById('contact-form').reset(); // Restablece el formulario
            
            // Oculta el mensaje después de 5 segundos
            setTimeout(function() {
                formStatus.style.display = 'none'; // Oculta el cuadro
            }, 5000); // 5000 milisegundos = 5 segundos
        }, function(error) {
            // Mensaje de error
            const formStatus = document.getElementById('form-status');
            formStatus.innerText = 'Error al enviar: ' + JSON.stringify(error);
            formStatus.className = 'error'; // Agrega clase de error
            formStatus.style.display = 'block'; // Muestra el cuadro
            
            // Oculta el mensaje después de 5 segundos
            setTimeout(function() {
                formStatus.style.display = 'none'; // Oculta el cuadro
            }, 5000); // 5000 milisegundos = 5 segundos
        });
});