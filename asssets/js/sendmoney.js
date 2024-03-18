$(document).ready(function() {
    $('.contact-item').click(function() {
        var contactName = $(this).text();
        // guardar el nombre contacto
        localStorage.setItem('selectedContact', contactName);
        // html enviar dinero
        window.location.href = 'sendmoney.html';
    });
});
