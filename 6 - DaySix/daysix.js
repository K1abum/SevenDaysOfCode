var frutas = new Array();
var laticinios = new Array();
var congelados = new Array();
var doces = new Array();
var massas = new Array();
var adicionar = false;

alert('Favor usar o "CONSOLE". Para acessa-lo use o "INSPECIONAR"');
alert('Favor escolher alguma categoria para adicionar o produto');


while (adicionar !== true){
    var categoria = prompt('1 - FRUTAS | 2 - LATICINIOS | 3 - CONGELADOS | 4 - DOCES | 5 - MASSAS | 0 - DELETAR ITEM | SAIR - PARA SAIR | LISTAR - PARA LISTA OS ITENS');
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
        console.log("DELETAR ITEM:");
        console.log("-- 1 - FRUTAS-- " + frutas);
        console.log("-- 2 - LATICINIOS-- " + laticinios);
        console.log("-- 3 - CONGELADOS-- " + congelados);
        console.log("-- 4 - DOCES-- " + doces);
        console.log("-- 5 - MASSAS-- " + massas);
        console.log('--------------------');
        let categoriaDeletar = prompt('1 - FRUTAS | 2 - LATICINIOS | 3 - CONGELADOS | 4 - DOCES | 5 - MASSAS |');
        if (categoriaDeletar == 1){
            let itemDeletar = prompt('Qual dos itens voce quer deletar das FRUTAS: ' + frutas);
            for (let fruta of frutas){
                if(itemDeletar == fruta){
                    let item = frutas.indexOf(fruta);
                    frutas.splice(item,1);
                } else {
                    alert('Item nao encontrado');
                }
            }
        } else if (categoriaDeletar == 2){
            let itemDeletar = prompt('Qual dos itens voce quer deletar dos LATICINIOS: ' + laticinios);
            for (let laticinio of laticinios){
                if(itemDeletar == laticinio){
                    let item = laticinios.indexOf(laticinio);
                    laticinios.splice(item,1);
                }else {
                    alert('Item nao encontrado');
                }
            }
        } else if (categoriaDeletar == 3){
            let itemDeletar = prompt('Qual dos itens voce quer deletar das CONGELADOS: ' + congelados);
            for (let congelado of congelados){
                if(itemDeletar == congelado){
                    let item = congelados.indexOf(congelado);
                    congelados.splice(item,1);
                }else {
                    alert('Item nao encontrado');
                }
            }
        } else if (categoriaDeletar == 4){
            let itemDeletar = prompt('Qual dos itens voce quer deletar das DOCES: ' + doces);
            for (let doce of doces){
                if(itemDeletar == doce){
                    let item = doces.indexOf(doce);
                    doces.splice(item,1);
                }else {
                    alert('Item nao encontrado');
                }
            }
        } else if (categoriaDeletar == 5){
            let itemDeletar = prompt('Qual dos itens voce quer deletar das MASSAS: ' + massas);
            for (let massa of massas){
                if(itemDeletar == massa){
                    let item = massas.indexOf(massa);
                    massas.splice(item,1);
                }else {
                    alert('Item nao encontrado');
                }
            }
        }
    } else if( categoria == 'SAIR') {
        adicionar = true;
    } else if(categoria == 'LISTAR'){
        console.log('LISTA DE COMPRAS');
        console.log("--FRUTAS-- " + frutas);
        console.log("--LATICINIOS-- " + laticinios);
        console.log("--CONGELADOS-- " + congelados);
        console.log("--DOCES-- " + doces);
        console.log("--MASSAS-- " + massas);
        console.log('--------------------');
    }     
}

console.log('LISTA DE COMPRAS');
console.log("--FRUTAS-- " + frutas);
console.log("--LATICINIOS-- " + laticinios);
console.log("--CONGELADOS-- " + congelados);
console.log("--DOCES-- " + doces);
console.log("--MASSAS-- " + massas);



/*

console.log('LISTA DE COMPRAS');
console.log('--Frutas--');
for(let fruta of frutas){
    console.log(fruta);
}
console.log('--Laticinios--');
for(let laticinio of laticinios){
    console.log(laticinio);
}
console.log('--Congelados--');
for(let congelado of congelados){
    console.log(congelado);
}
console.log('--Doces--');
for(let doce of doces){
    console.log(doce);
}
console.log('--Massas--');
for(let massa of massas) {
    console.log(massa);
}

*/
