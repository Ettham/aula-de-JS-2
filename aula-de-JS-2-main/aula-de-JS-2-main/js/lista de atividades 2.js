// lista de atividades

//1) peça ao usuario para digitar sua idade. Se tiver 18 anos ou mais, exiba "maior de idade", se não exiba "menos de idade"

let idade = parseInt(prompt("digite sua idade"))
if(idade >= 18){
    console.log("maior de idade")
}else{
    console.log("menosr de idade")
}

//2) crie im sistema de notas. Se a nota for maior ou igual a 9, mostre "excelente". Se fpr entre 6 a 8, "aprovado". Caso contrario, "reprovar"

let nota = parseInt(9)
if(nota >= 9){
    console.log("aprovado")
}else if(nota >= 6 && nota <= 8){
    console.log("aprovado")
}else{
    console.log("reprovado")
}

//3) use switch para imprimir o dia da semana com base no numero de 1 a 7

//4) dado x = 10 e y = 5
// A) mostre a soma
// B) subtração
// C) multiplicação
// D) divisão e resto entre elas

let x = 10
let y = 15
console.log(x + y)
console.log(x - y)
console.log(x * y)
console.log(x / y)



//5) crie um arrey com 4 frutas. Adicione uma nova fruta, remova aultima, e exiba o arrey final com as frutas separadas com virgula



//6) verifique se duas variavel x = "50" tem o mesmo valor usando == e depois usando ===. Mostre os resultados e explique a diferença

//7) crie uma verificação onde se a pessoa tem mais de 16 anos e se possui titulo de eleitor exiba "tem o direito de votar"

let Idade = parseInt(prompt("digite sua idade"))
if(idade >= 17){
    console.log("maior de idade")
}else{
    console.log("menosr de idade")
}

//8) crie uma verificação onde se a pessoa tiver ingresso ou estiver na lista VIP, ela podera entrar no evento

//9) em um codigo escreva seu nome completo e mostre:
// A) tamanho do nome 
// B) nome em maisculo
// C) nome em minusculo
// D) verifique se contem a palavra "Soares"
// E) substitua seu primeiro nome por "Desenvolvedor(a)"

//10) crie um sistema simples de login. Usuario so entra se o email nao estiver vazio e a senha tiver pelo menos 6 carateres