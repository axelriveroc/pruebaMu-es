const prompt = require("prompt-sync")({ sigint: true });

 let sumar = (a , b)=> a + b
 let restar = (a, b) => a - b 
let multiplicar = (a , b) => a * b 
 let dividir = (a, b) => a / b 

console.log('-------------- probando las funciones ---------------');

let numero1 = prompt("ingrese un numero: ")
let numero2 = prompt("ingrese otro numero: ")
let numero3 = prompt("ingrese el tercer numero: ") 

 console.log(sumar(+numero1 , +numero2));
console.log(restar(+numero1, +numero2))
console.log(multiplicar(+numero1, +numero2))
console.log(dividir(+numero1, +numero2))
console.log(dividir(+numero1, 0))

let cuadradoDeUnNumero = x => multiplicar(x, x)

console.log(cuadradoDeUnNumero(+numero1)) 

 const promedioDeTresNumeros = (a, b, c) => {
    let primerSuma = sumar(a, b)
    let sumaTotal = sumar(primerSuma, c)
    return dividir(sumaTotal , 3)
}
console.log(promedioDeTresNumeros(+numero1, +numero2, +numero3))




 const calcularPorcentaje = (t, p)=> {
    let primerCuenta = multiplicar(t, p)
    return dividir(primerCuenta, 100)
}

console.log(calcularPorcentaje(+numero1 , +numero2)) 



const generadorPorcentaje = (r, n)=>{
    primerCuentilla = multiplicar(r, 100)
    return dividir(primerCuentilla, n)
}

console.log(generadorPorcentaje(+numero1, +numero2))
