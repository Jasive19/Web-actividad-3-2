$(document).ready(function () {
    $('.contenedor section').hide();
    $('.contenedor section:first').show();

    $('ul.tabs li a').click(function(){
        $('.contenedor section').hide();

        let seccionActivada = $(this).attr('href');
        $(seccionActivada).show();
        return false;
    });
    
});