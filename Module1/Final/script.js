var name = 'Camila';
let apellido = 'Apellido';
const aNacimiento = 1991;
let b = true;
let a;

// console.log(typeof name);
// console.log(typeof aNacimiento);
// console.log(typeof b);
// console.log(typeof a);
// name = 'pepe';
// if(name === 'Camila') {
//     console.log('if');
// } else if (name === 'pepe') {
//     console.log('else if');
// } else {
//     console.log('Otro');
// }

// name === 'Camila' ? console.log('Soy camila') : console.log('No');

// let edad = aNacimiento === 1991 ? 28 : undefined;
// console.log(edad);

// switch(aNacimiento) {
//     case '1991':
//         console.log('Tiene 28');
//         break;
//     default:
//         console.log('adsfasdf');
// }

// for(let i = 0; i < 5; i++) {
//     console.log(i);
// }
// let i = 0;
// while(i < 5) {
//     console.log(i);
//     i++;
// }

// let i = 0;
// do {
//     console.log(i);
// }while (i > 0);

function foo(param1, aram1, ...arg) {
    console.log(param1, aram1, 'asdfasdf', 'asdfasd');
// console.log(arg);
}

foo('afas', 'asdfas', 'asdfadsf', 'asdfsadf');

// let f = function(){
//     console.log('f');
// }

// f();

// let arrowFunction = x => console.log(x);

// arrowFunction('x');

// let array = [1, 'asdfa', false, 4444 ];
// a = new Array();

// function isNumber(x) {
//     return typeof x === 'number';
// }

// let filtro = array.filter(isNumber);
// console.log(filtro);

// let mapArray = array.map(x => {

//     return `Elemento ${x}`;
// });

// console.log(mapArray);
// array.forEach(x => console.log(x));

// for (let e of array) {
//     console.log(e);
// }

// array.push('Al final');
// array.unshift('Al inico');
// let ultimpo = array.pop();
// let primero = array.shift();

// console.log(array);
// console.log(ultimpo);
// console.log(primero);
// console.log(a);

let nomVar = 'comida favorita';
let o = {
    name: 'Camila',
    apellido: 'Rojí',
    aNacimiento: 1991,
    ['comida favorita']: 'Milanesa con fritas'
};

o.trabajo = 'Programadora';
// console.log(o);

// let ob = o;
// o.name = 'Pepe';
// console.log(ob);


// let ob = Object.assign({}, o);
// console.log(ob);

// for (let e in ob) {
//     console.log('key', e);
//     console.log(ob[e]);
// }