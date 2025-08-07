//1- crie funções criar Calculadora(operador) que retorne outra funções capaz de realizar a operação com dois numeros. exenplo de uso:
// const somar = criarCalculadora('+'):
// console.log(somar(5,3));// 8

function criarCalculadora(operador){
    return function (a,b){
        switch(operador){
            case '+':
            console.log(a+b)
            break;
            case '*':
            console.log(a*b)
            break;
            case '-':
            console.log(a-b)
            break;
            case '/':
            console.log(a/b)
            return
            default:
                console.log("esse operador não faz calculo");
                break
        }
    }
}

const calculadora = criarCalculadora('+');
    calculadora(5,5);


//2- cri uma função chamada enviar Email(destinatario)que:use async, Simule o tempo de envio com setTimecut dentro de uma promise (ex: 2 segundos)mostre no console,"Enviendo  e-mail para [destinatorio...]",Apos 2 segundos "E-mail enviado sucesso para [destinatorio]"

function enviarEmail(destinataria){
    console.log(`enviando email para ${destinatorio}`);
     esperar();
    console.log('finalizado');
}

function esperar (){
    return new Promise(resolve =>{
        setTimeout(() =>{
            resolve('enviando com sucesso');
            console.log('Envia')
        },2000);
    })
}

//3- crie array de objetos chamaddo produtos, com pelo menos 2 produtos. Cada produto deve ter nomee preço. Converta esse array para uma atring JSON e mostre o resultado no console 

