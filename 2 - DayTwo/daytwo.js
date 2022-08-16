/*
let numeroUm = 1;
let stringUm = '1';
let numeroTrinta = 30;
let stringTrinta = '30';
let numeroDez = 10;
let stringDez = '10';

if (numeroUm ==  stringUm ){
    console.log('As variaveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes');
} else {
    console.log('As variaveis numeroUm e stringUm nao tem o mesmo valor');
}

if (numeroTrinta ==  stringTrinta ){
    console.log('As variaveis numeroTrinta e stringTrinta tem o mesmo valor, mas tipos diferentes');
} else {
    console.log('As variaveis numeroTrinta e stringTrinta nao tem o mesmo valor');
}

if (numeroDez ==  stringDez ){
    console.log('As variaveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes');
} else {
    console.log('As variaveis numeroDez e stringDez nao tem o mesmo valor');
}
*/

var userNome = prompt('Qual o seu nome?');
var userIdade = prompt('Qual a sua idade?');
var userLinguagem = prompt('Qual a linguagem de programacao voce esta usando?');


console.log(userNome);
console.log(userIdade);
console.log(userLinguagem);

alert('Ola ' + userNome + ' voce tem ' + userIdade + ' anos e ja esta aprendendo ' + userLinguagem);

var userGosto = prompt('Voce gosta de estudar ' + userLinguagem + '? Responda com o numero 1 para "SIM" ou 2 para "NAO."');
if( userGosto == 1){
    alert('Muito bom! Continue estudando e voce tera sucessso');
} else {
    if (window.confirm('Ahh que pena... Ja tentou aprender outras linguagens? Gostaria de ver outras linguagens?')){
        window.open("https://www.simplilearn.com/best-programming-languages-start-learning-today-article#:~:text=Learn%20in%202022%3F-,1.,97.8%20percent%20of%20all%20websites");
    }

}
