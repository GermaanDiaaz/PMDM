$(document).ready(function () {
    // Función para contar caracteres y palabras
    function contarTexto() {
        // Obtenemos el texto ingresado en la caja de texto
        let texto = $('#textoInput').val();

        // 1. Contar caracteres (longitud total de la cadena)
        let numCaracteres = texto.length;

        // 2. Contar palabras usando split()
        // .trim() remueve los espacios al inicio y al final
        // split(/\s+/) divide la cadena por uno o más espacios en blanco / saltos de línea
        let textoLimpio = texto.trim();
        let palabras = textoLimpio === "" ? [] : textoLimpio.split(/\s+/);
        let numPalabras = palabras.length;

        // Actualizamos los resultados en el HTML
        $('.caracteres').text(numCaracteres);
        $('.palabras').text(numPalabras);
    }

    // Ejecutamos la función al cargar la página para contar el texto inicial
    contarTexto();

    // Escuchamos el evento 'input' para actualizar el conteo en tiempo real al escribir
    $('#textoInput').on('input', contarTexto);
});