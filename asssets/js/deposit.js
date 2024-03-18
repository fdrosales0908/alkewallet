$(document).ready(function() {
    $('#deposit-form').submit(function(event) {
        event.preventDefault();
        
        var amount = $('#amount').val();
        
        // Validar monto
        if (isNaN(amount) || amount <= 0) {
            alert('50000');
        } else {
            // monto valido
            this.submit();
        }
    });
});
