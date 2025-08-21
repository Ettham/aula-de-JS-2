const cep = `01001000`;

//fetch API - nativo javascript
// fetch(`https://viacep.com.br/ws/${cep}/json/`)
// fetch("https://viacep.com.br/ws/"+cep+"/json/")
fetch("https://api.disneyapi.dev/charcter")
.then(res => res.json())// converte para objeto
.then(data => console.log(data))// converter os dados convertidos e mostra os dados
.catch(err => console.log(err))// se der erro, captura e mostra o erro
//#############################################################################################################

//ler o dados do arquivo
function lerDados(arquivo ="usuarios.Json") {
    //retornan os ddos convertidos objeto
    return JSON.parse(fs.readFileSync(arquivo, 'utf-8'))//
}

//salvar dados de arquivo
function salvarDados(arquivo="usuarios.json", dados) {
    //usa a funcao de escrever no arquivo, passando como parametros o arquivo e ummetodo que converta para JSON
    fs.writeFileSync(arquivo, JSON.stringify(dados, null, 2));
}
//
const http = require('http');
const fs = require('fs');
const port = 3000;

const server = http.createServer((req,res) => {//criando o servidor
    res.setHeader("content-Type" , "application/Json");

    if(req.method === "GET" && req.url === "/dados"){
        const dados = lerDados('usuarios.Json');//retorna os dados do json
        res.writeHead(200);
        res.end(JSON.stringify(dados));
    }else if(req.method === "POST" && req.url === "/dados"){
        let body = '';

        //e um evento que escuta quando os dados chegam
        req.on('data', chunk =>{
            body += chunk.toString();
        });

        req.on('end', () => {
            try{//tudo que der certo ele entra aqui
                const novoDado = JSON.parse(body)

                const Dados  = lerDados('usuarios.Json');

                novoDado.id = 99

                Dados.puhs(novoDado);

                salvarDados('usuarios.Json', Dados);

                res.writeHead(201)
                    res.end("dados adicionados")
                

            }catch (error){
                console.log("ocorreu um erro; ", error);
                res.writeHead(400);
            }
        })
    }else{
        res.writeHead(404)
            res.appendHeader("pagina não existe")
        
    }

})

//coloca o servidor para escuta na porta definida

server.listen(port, () => { //servidor irá rodar na porta definida
    console.log(`Servidor rodando na porta ${port}. Só abrir localhost:${port}/`)
});

const url =`http://locallhost:${port}/dados`;

const objNovoDados = {
    nome: "ronaldo manuel porsched do victor",
    idade: 105,
    salario: 250.000
}

fetch(url , {
    method: "POST",
    headers: {
        'content-type': 'applicado/Json'
    },
    body: JSON.stringify(objNovoDados)
})
.then(Response =>{
    if(!Response)
        console.log("Errorrrr");

    return Response.json()
})
.then(data => console.log("resposta do servidor: ", data))
.catch(erro  =>{
    console.log('error:' . error );
})