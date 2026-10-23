$(document).ready(function () {
    function contarTexto() {
        let texto = $('.texto').val();

        let numCaracteres = texto.length;

        let palabras = texto.split(' ');
        let numPalabras = palabras.length;

        $('.caracteres').text(numCaracteres);
        $('.palabras').text(numPalabras);
    }

    contarTexto();

    $('.texto').on('input', contarTexto);
});