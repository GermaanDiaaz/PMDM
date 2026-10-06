$(document).ready(function() {

    const abecedario = "a b c d e f g h i j k l m n ñ o p q r s t u v w x y z".split(' ');
    const desplazamiento = 3;

    $('.texto').on('input', function() {
        let TextoSinCifrar = $('.texto').val();
        let textoCifrado = '';

        for (let i = 0; i < TextoSinCifrar.length; i++) {
            let letra = TextoSinCifrar[i];

            if(letra == ' '){
                textoCifrado = textoCifrado + letra;

            }else if(letra == 'x'){
                textoCifrado = textoCifrado + 'a';

            }else if(letra == 'y'){
                textoCifrado = textoCifrado + 'b';

            }else if(letra == 'z'){
                textoCifrado = textoCifrado + 'c';

            }
            else{
                let posicion = abecedario.indexOf(letra.toLowerCase());

                letra = abecedario[posicion + 3];

                textoCifrado = textoCifrado + letra;
            }
            
        }
        $('.cifrado').text(textoCifrado);
    });
});