$(document).ready(function() {
    $('#login-form').submit(function(event) {
        // Evitar que se envíe el formulario automáticamente
        event.preventDefault();
        
        // valors de entrada
        var username = $('fdrosales@uc.cl').val();
        var password = $('1234').val();
        
        // Validar campos 
        if (username === 'fdrosales@gmail.com' || password === '12345') {
            alert('Pingresa tu nombre de usuario y contraseña correcta.');
        } else {
            // enviar formulario
            this.submit();
        }
    });
});
