// 3. solicite ao usuario que digite um CPF e verifique se ele tem exatamente 11 digitos. Caso contrario, exiba uma mentagem personalizada ezplicando o erro

// estrada - input de dados
let cpf = prompt("digite o numero de CPF do usuario");
//converter para String
let strCpf = String(cpf)
//verificar se temo variavel cpf tem o tamanha 11
if(cpf.length === 11){
    alert('perfeito!')
}
//contrario do IF - senão (sendo fizer o bloco de IF, ele vem pro else)
else{
    alert("opa, parceiro! seu cpf esta faltando um digito.")
}

// Atividade 4
// let n1 = '150'; //para int
// let n2 = 18; // para string
// let n3 = "20.99"; //float
// let n4 = "010"; //para int

let n1 =parseInt('150');
console.log(parseInt(n1))
let n2 =String(18);
console.log(String(n2))
let n3 =parseFloat("20.99");
console.log(parseFloat(n3))
let n4 =parseInt("010");
console.log(parseInt(n4))

// 5. qual valor de cada variavel abaixo:

//A)
let soraia =0;
soraia++;
// 1

//B)
let bichinho = 5;
bichinho++;
// 6

//C)
let matheus = 40;
matheus--;
//39

//D)
let numero = 10;
numero +=5;
//15

//E)
let saldo = 500;
saldo -= 200;
//300

//F)
let b1 = 9;
b1 *= 2;
//18

//G)
let oux = 1;
oux = oux + 9;
//10

//H)
let aux = 5;
aux = aux - 5;
// 0

//6. Crie um objeto aluno com as propriedades nome, idade, notaFinal e aprovado(boolean)  

let nome = "Carlos";
let idade = 20;
let notaFinal = 8.5;
let aprovado = true

let objeto = {
    nome :nome,
    idade :idade,
    notaFinal :notaFinal,
    aprovado :true,
}



//7. com a atividade acima, crie uma string informando o nome, idade, nota e se foi aprovado
let str = ""
str+=`o nome do aluno aprovado é ${objeto.nome}`;
str+=`A idade do aluno é ${objeto.idade}`;
str+=`A nota final do aluno é ${objeto.notaFinal}`;
str+=`o aluno foi${objeto.aprovado ? "aprovado" : "reprovado"}`;
console.log(str)

//8. faça uma calculadora da sua idade
const anoAtual = 2025;
const anoNacimento = 2007;

let calc = anoAtual - anoNacimento;
console.log(calc)

//9. converta graus Celsius para Fahrenheit com a formula F=(c* 9/5) + 32

//a) 18°C    //b) 5°C    //c) 27°C    //d) 0
//e) 100°C    //f) 44°C    //g)-4°C    //h) 33°C

function conversaoGraus(c) {
    return (c*9/5) + 32;
}

//9- Converta graus celcius para fahrenheit com a formula F = (C * 9/5) + 32   

//a) 18° C
   
//b) 5°  C

//c) 27° C

//d) 0°  C

//e) 100°C

//f) 44° C

//g) -4° C

//h) 33° C

function converterTemperaturas() {
    const valoresC = [18, 5, 27, 0, 100, 44, -4, 33];
    let resultadoHTML = "<h3>Resultados:</h3><ul>";
  
    valoresC.forEach(c => {
      const f = celsiusParaFahrenheit(c);
      resultadoHTML += `<li>${c}°C = ${f.toFixed(1)}°F</li>`;
    });
  
    resultadoHTML += "</ul>";
    document.getElementById("resultado").innerHTML = resultadoHTML;
  }

  