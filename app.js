let autos = ["Fiat Uno", "Etios", 208]
console.log(autos)
console.log(autos.length)
console.log(autos.push(504))
console.log(autos)
console.log(autos.pop())
console.log(autos)
console.log(autos.unshift("R12"))
console.log(autos)
console.log(autos.shift())
console.log(autos)

const frutas = ["banana", "manzana", "tomate", "naranja"]
for(i=0; i<frutas.length; i++) {
    console.log(frutas[i])
}

const arreglo2 = [3, 4, 15, 6, 5]
let iteracion = arreglo2[4];

while(iteracion > 0) {
  console.log(`Iteración: ${iteracion--}`);
}

const array1 = ['a', 'b', 'c']
array1.forEach(function(value, index){
console.log(index + " " + value)
})

document.getElementById('lista').style.color = 'red'

var persona = {}
var persona = {
 nombres: ['Rodrigo', 'Juan'],
 edad: 32,
 intereses: ['música', 'esquí']
}   
console.log(persona.edad)
console.log(persona.nombres)

let autos2 = [{
    'marca': 'Honda',
    'modelo': 'Civic',
    'color': 'Negro',
    'anio': 2010
    },
    {
    'marca':
    'VolksWagen',
    'modelo': 'Golf',
    'color': 'Blanco',
    'anio': 2015
    }]
console.log(autos2[0].marca, autos2[0].modelo)    
