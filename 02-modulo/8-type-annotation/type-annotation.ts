// => VARIÁVEIS [Type Annotations]
let nome:string = 'Glaucia Lemos';
console.log(nome);

// => Arrays [Type Annotations]
let animais:string[] = ['Elefante', 'Cachorro', 'Panda', 'Girafa'];
console.log(animais);

// => Objetos [Type Annotations]
let carro:{
    name: string;
    ano: number;
    preco: number; 
};

carro = { name: 'Toyota Yaris Sedan XS', ano :2019, preco: 80000 };
console.log(carro);

// => Functions [Type Annotations]
function multiplicacao(num1:number, num2:number){
    return num1 * num2
}
console.log(multiplicacao(2,5))