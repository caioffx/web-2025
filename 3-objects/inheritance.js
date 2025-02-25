//INHERITANCE

const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__) //a partir desse comando, é possível acessar o protótipo do objeto, o objeto 'pai'
console.log(ferrari.__proto__ === Object.prototype);
console.log(volvo.__proto__ === Object.prototype);
console.log(volvo.__proto__ === ferrari.__proto__);
console.log(Object.prototype.__proto__);
console.log(Object.prototype.__proto__ === null);