var frutas = new Array();
var laticinios = new Array();
var congelados = new Array();
var doces = new Array();
var massas = new Array();
var adicionar = false;

alert('Favor escolher alguma categoria para adicionar o produto');

while (adicionar !== true){
    var categoria = prompt('1 - FRUTAS | 2 - LATICINIOS | 3 - CONGELADOS | 4 - DOCES | 5 - MASSAS | 0 - PARA SAIR');
    if(categoria == 1){
        let produto = prompt('Qual item voce quer adicionar na lista de FRUTAS?');
        frutas.push(produto);       
    }else if(categoria == 2){
        let produto = prompt('Qual item voce quer adicionar na lista de LATICINIOS?');
        laticinios.push(produto);
    }else if(categoria == 3){
        let produto = prompt('Qual item voce quer adicionar na lista de CONGELADOS?');
        congelados.push(produto);
    }else if(categoria == 4){
        let produto = prompt('Qual item voce quer adicionar na lista de DOCES?');
        doces.push(produto);
    }else if(categoria == 5){
        let produto = prompt('Qual item voce quer adicionar na lista de MASSAS?');
        massas.push(produto);
    } else if(categoria == 0){
        adicionar = true;
    }    
}

console.log('LISTA DE COMPRAS');
console.log('//Frutas//');
for(let fruta of frutas){
    console.log(fruta);
}
console.log('//Laticinios//');
for(let laticinio of laticinios){
    console.log(laticinio);
}
console.log('//Congelados//');
for(let congelado of congelados){
    console.log(congelado);
}
console.log('//Doces//');
for(let doce of doces){
    console.log(doce);
}
console.log('//Massas//');
for(let massa of massas) {
    console.log(massa);
}