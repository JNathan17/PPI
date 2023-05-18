function funcao(){
console.log('Teste')
}
const result = function(num1, num2){
    console.log(num1 + num2)
}

//funcao()
//result(5,5)

function calcularArea(largura, altura){

    const area = largura * altura

    if(area > 20){
        console.log(`Valor invalido: ${area} m2`)
    }else{
        return area
    }

}

//console.log(calcularArea(50,2))

function somar(){
     var result = 0

    for(let i in arguments){
        result += arguments[i]
    }

    return result
}

//console.log(somar(1))
//console.log(somar(1, 2, 5, 8, 7))

let dobro = function(numero){
    return 2 * numero
}

//console.log(dobro(10))

/*aeroFunction*/
triplo = (num) =>{
    return num * 3
}

//console.log(triplo(3))

let dobrar  = param => 2* param

console.log(dobrar(3))