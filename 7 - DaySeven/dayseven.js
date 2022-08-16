//Variaveis
var escolha;
var loop = false;

//Funcoes
function somar(a,b){
    a = Number(window.prompt('Digite o primeiro numero '));
    b = Number(window.prompt('Digite o segundo numero || ' + a + ' + ' ));
    console.log('RESULTADO: ' + a + ' + ' + b + ' = ' + (a + b));
    return alert('RESULTADO: ' + a + ' + ' + b + ' = ' + (a + b));  
}
function substrair(a,b){
    a = Number(window.prompt('Digite o primeiro numero '));
    b = Number(window.prompt('Digite o segundo numero || ' + a + ' - ' ));
    console.log('RESULTADO: ' + a + ' - ' + b + ' = ' + (a - b)); 
    return alert('RESULTADO: ' + a + ' - ' + b + ' = ' + (a - b));  
}
function multiplicar(a,b){
    a = Number(window.prompt('Digite o primeiro numero '));
    b = Number(window.prompt('Digite o segundo numero || ' + a + ' * ' ));
    console.log('RESULTADO: ' + a + ' * ' + b + ' = ' + (a * b)); 
    return alert('RESULTADO: ' + a + ' * ' + b + ' = ' + (a * b));  
}
function dividir(a,b){
    a = Number(window.prompt('Digite o primeiro numero '));
    b = Number(window.prompt('Digite o segundo numero || ' + a + ' / ' ));
    console.log('RESULTADO: ' + a + ' / ' + b + ' = ' + (a / b));
    return alert('RESULTADO: ' + a + ' / ' + b + ' = ' + (a / b));  
}

//Switch
while(loop !== true){
    switch(escolha = prompt('1 - SOMAR || 2 - SUBTRAIR || 3 - MULTIPLICAR || 4 - DIVIDIR || SAIR - PARA SAIR')){
        
        case '1':
            somar();
            break;
        case '2':
            substrair();
            break;
        case '3':
            multiplicar();
        break;
        case '4':
            dividir();
            break;
        case 'SAIR':
            alert('ATEH A PROXIMA');
            loop = true;
            break;
        default:
            alert('NUMERO INVALIDO');
            break;    
    }
}