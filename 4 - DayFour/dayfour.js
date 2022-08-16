var numeroDescobrir = Math.floor(Math.random() * 10);
var tentativa = 0;
var tentativaFeitas = false;

console.log(numeroDescobrir);

while (tentativaFeitas !== true){
    if(tentativa < 3){
        tentativa++;
        var tentativaNumero = prompt('Escolha um numero entre 0 a 10')
        if (tentativaNumero == numeroDescobrir){
            alert('Parabens voce acertou o numero. Numero esperado ' + numeroDescobrir + ' | Seu numero ' + tentativaNumero);
            tentativaFeitas = true;
        } else {
            if ( tentativa == 3){
                alert('Acabaram as suas tentativas!');
            } else {
                alert('Tente novamente');
            }    
        }
        console.log(tentativaNumero);
        if (tentativa >= 3){
            tentativaFeitas = true;
        }
    }   
}
if (tentativa == 3){
    alert('O numero certo era ' + numeroDescobrir + ' | Numero de Tentativas ' + tentativa);
}