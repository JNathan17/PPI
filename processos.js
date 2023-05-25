//console.log("Processando 1...")
//console.log("Processando 2...")
//console.log("Processando 3...")

//console.log("Processando 1...")
//setTimeout(()=>{
//    console.log("Processando 3...")
//},2000);
//console.log("Processando 2...")

//function processando1(){
    //return new Promise((resolve, reject)=>{
    //    resolve(console.log("Processando 1"))
  //  })
//}

//function processando2(){
    //return new Promise((resolve, reject)=>{
      //  setTimeout(()=>{
    //        resolve(console.log("Processando 2"))
  //      }, 2000)
//    })
//}

//function processando3(){
//    return new Promise((resolve, reject)=>{
//        resolve(console.log("Processando 3"))
//    })
//}

//processando1()
//.then(processando2)
//.then(processando3)
//.catch(erro => console.log("Deu Ruim!"))

//function validarPalavra(palavra){
//    return new Promise((resolve, reject)=>{
//        if(palavra.length < 3){
//            reject(palavra)
//       }
//        resolve(palavra)
//    })
//}

//validarPalavra("oii")
//.then(result => console.log("Promise resolvida a palavra", result, "tem", result.length, "caracteres"))
//.catch(result => console.log("Promise rejeitada a palavra", result, "tem", result.length, "caracteres"))

function dobroDoNumero(numero){
    return numero * 2
}

function calcularValor(numero){
    return new Promise((resolve, reject)=>{
        if(numero > 0){
            resolve(dobroDoNumero(numero))
        }
            reject(numero)
    })
}

//calcularValor(5)
//    .then(resultado10 => resultado10 * 2)
//    .then(resultado20 => resultado20 * 10)
//    .then(resultado200 => resultado200 / 5)
//    .then(resultadoFinal => console.log(resultadoFinal))
//    .catch(erro => console.log("Valor invalido!", erro))

// http://viacep.com.br/ws/01001000/json/

const fetch = require("node-fetch")

function buscarCep(cep){
    return fetch(`http://viacep.com.br/ws/${cep}/json/`)
    .then(resposta => console.log(resposta))
}

buscarCep("58910000")