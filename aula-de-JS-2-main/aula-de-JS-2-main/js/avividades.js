// //funcion callback

// function executar(minhaFuncionCallback){
//     console.log("Arte")
//     minhaFuncionCallback();
//     console.log("Depois");
// }

// // executar(function(){console.log("Executando")})
// executar(() => console.log("Executando"))

// // 1) Um site precisa validar dados de um formulário de cadastro (nome, e-mail e idade). Crie uma função
// // tradicional para validar o nome e uma arrow function para validar a idade se for maior ou igual a 21.
// // Sistema de autenticação com callback

// // Função tradicional para validar nome (deve ter pelo menos 3 caracteres)
// function validarNome(nome) {
//     return nome && nome.length >= 3;
//   }
  
//   // Arrow function para validar idade (deve ser maior ou igual a 21)
//   const validarIdade = (idade) => idade >= 21;
  
//   // Exemplo de uso
//   console.log(validarNome("Ana")); // true
//   console.log(validarIdade(20));   // false
//   console.log(validarIdade(21));   // true

// // 2) Um sistema precisa validar se o usuário existe no banco de dados e, caso sim, redirecionar para a área
// // logada. Simular essa autenticação usando uma função login(usuario, senha, callback) onde o callback define
// // o que fazer após o login.

// // Simulando um "banco de dados" com usuários
// const usuarios = [
//     { usuario: "joao", senha: "1234" },
//     { usuario: "maria", senha: "abcd" }
//   ];
  
//   // Função login que recebe usuário, senha e callback para ação após autenticação
//   function login(usuario, senha, callback) {
//     const encontrado = usuarios.find(u => u.usuario === usuario && u.senha === senha);
    
//     if(encontrado) {
//       callback(null, Bem-vindo," ${usuario}!Redirecionando para área logada...");
//     } else {
//       callback("Usuário ou senha inválidos", null);
//     }
//   }
  
//   // Exemplo de uso
//   login("joao", "1234", (erro, mensagem) => {
//     if (erro) {
//       console.log(erro);
//     } else {
//       console.log(mensagem);
//     }
//   });

// // 3) Calculadora de Frete com Funções Anônimas
// // Um e-commerce calcula o frete com base no peso e região do cliente. Criar uma função calcularFrete(peso,
// // regiao) que utilize uma função anônima dentro para aplicar as taxas.

// function calcularFrete(peso, regiao) {
//     // Função anônima para calcular taxa baseada na região
//     const taxaPorRegiao = function(r) {
//       switch (r.toLowerCase()) {
//         case "norte": return 20;
//         case "sul": return 10;
//         case "leste": return 15;
//         case "oeste": return 12;
//         default: return 25; // região desconhecida
//       }
//     };
    
//     const taxa = taxaPorRegiao(regiao);
//     const frete = peso * taxa;
//     return frete;
//   }
  
//   // Exemplo de uso
//   console.log(calcularFrete(5, "norte")); // 5 * 20 = 100
//   console.log(calcularFrete(3, "sul"));   // 3 * 10 = 30

// //funções tradicionais
// function concatenacaoPalavras(a, b){
//   return a+'-'+b
// }

// //funções anonimas
// let saudacao = function(){
//   console.log("oi pessoas")
// }

// concatenacaoPalavras("victor","moreira");
// saudacao();

// // //Arrow functions
// // let saudacao = function(){
// //   console.log("oi pessoal")
// // }
// const saudacao1 = () =>{
//   console.log("oi pessoal")
// }

// // funcion tradicional
// function somar (a,b){
//   return a+b;
// }
// //equivalente a essa function arrow function
// const somar = (a,b) => a+b;

// //diferença do this estre arrow function e funções traducionais
// //arrow function NÃO POSSO UTILIZAR O THIS
// //FUNCÃO NORMAL POSSO UTILIZAR O THIS
// const obj = {
//   nome: "ana",
//   idade: 15,
//   saudacao:()=>{
//     console.log("OI" +this.nome)//erro
//     // equivalebte a 
//     console.log("oi" + obj.nome)
//   }
// }

// // function callback

// function executar(a,b,c,d,funcaoCallback){
//   console.log("antes");
//   funcaoCallback();
//   console.log("depois");
// }
// executar(()=>console.log("Executandp!!"))

// //resultado do codigo
// // antes
// // executando
// // depois

// function executar(){
//   retonaErro(erro);
//   console.log(erro);
// }
// function retonaErro (erro){
//   return erro;
// }

// //funcion sicrona
// function sicrona(){
//   console.log("")
//   console.log("depois essa linha")
//   console.log("e depois essa linha ")
// }
//  sicrona();

//  function teste (){
//   console.log("a");
//   setTimeout(()=>{
//     console.log("b");
//   },2000);
//   console.log("c");
//  }
//  teste();

//  //funções que retornam outras funções

//  function saudacao2(nome){
//   return function(){
//     console.log(`${mensagem}, ${nome}`)
//   }
//  }

//  const msg = saudacao2("luiza"); //funçao1
//  funcao2("fala comigo"); //funcao 2

//  function funcao2 (nome, mensagem){
//   return console.log(`${mensagem}, ${nome}`);
//  }

// funções assincronas
function esperar (){
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('demorou, mas chegou :D');
    }, 5000);
  })
}

// toda vez que eu fizer uma função assicrona
// eu preciso utilizar o awit
async function executar(param) {
  console.log('esperando...');
  const resultado = await esperar();// espere a prosima finalizar com sucesso ou falso
  console.log(resultado);
}
executar();

//resultado desse codigo
//esperando.......
//depois de 5 segundos
//demorou mas chegou 

// reesultado A B C


let caro = {
  nome:"Honda Civic da ava Beatriz",
  marca:"Honda",
  modelo:"Ciciv",
  ano:2025,
  atributos:["som", "camera de re", "teto solar", "escapamento", "antena"],
}

console.log(carro.ano)//2025
console.log(carro.atributos)//tetomsola

//adicionar
carro.cor = "preto com vermelho";

//alterrar
carro.nome ="Honda Civic 2025";