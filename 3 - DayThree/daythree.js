var userDecisao1 = prompt('Ola! Para qual lado da forca voce quer seguir? Digite "1" para Front-end ou "2" para Back-end');


if (userDecisao1 == 1){
    console.log('Front-end');    
    var userDecisao2 = prompt('Legal! O que voce gostaria de aprender primeiro? Digite "1" para library React ou "2" para framework Vue');
    if(userDecisao2 == 1){
        console.log('library React');
    } else {
        console.log('framework Vue');
    }
} else if (userDecisao1 == 2){
    console.log('Back-end');
    userDecisao2 = prompt('Legal! O que voce gostaria de aprender primeiro? Digite "1" para aprender C# ou "2" para aprender Java');
    if(userDecisao2 == 1){
        console.log('C++');
    } else {
        console.log('Java');
    }
} else {   
    var userDecisao3 = prompt('Voce gostaria de apenas seguir um lado da forca ou poder unir esses dois lados? Digite "1" para apenas um lado ou digite "2" para seguir o lado Fullstack');
    if(userDecisao2 == 1){
        console.log('Apenas um lado da forca!');
    } else {
        console.log('Quero ser FULLSTACK!');
    }
}

alert('Quais linguagens voce gostaria de aprender?');



while (userLinguagens != 1){
    var userLinguagens = prompt('Para encerrar digite "1" ou apenas continue digitando e clicando em "OK" para adicionar a linguagem na lista');
    console.log(userLinguagens);      
}

alert('Para ver as opcoes e as linguagens escolhidas use o "INSPECIONAR" para ver no "CONSOLE"!!');
