'use strict'

let o = {
    name: 'Name',
    apellido: 'Apelli',
    saludar: function() {
        console.log('HOla', this.name);
    }
}

// o.saludar();

// let ob = {
//     name: 'Otro',
//     saludar: o.saludar
// }

// ob.saludar();

// let f = o.saludar;
// f();

// function User(name, apellido) {
//     this.name = name;
//     this.apellido = apellido;
// }

// let user = new User('Name', 'Apellido');
// console.log(user.name);

class User {
    constructor(name, apellido) {
        this.name = name;
        this.apellido = apellido;
    }

    saludar() {
        console.log('HOla')
    }
}

let user = new User('Nombre', 'Apellido');

class Administrador extends User {

    static propiedadEstatica = 'Esttica';

    constructor(name, apellido, clave) {
        super(name, apellido);
        this._clave = clave;
    }

    _p = 0;
    set p(value){
        if (value < 0) {
            throw new Error('Esta male');
        }

        this._p = value;
    }

    get p() {
        return this._p;
    }

    darPermisos() {
        console.log('Doy permisos');
    }

    saludar(){
        super.saludar();
        console.log('Otra cosa');
    }

    static metodoEstaico() {
        console.log('Metodo estatioc');
    }
}

// Administrador.metodoEstaico();
// console.log(Administrador.propiedadEstatica);
// let admin = new Administrador('name', 'appido', 'Clave');

// console.log(admin instanceof User);
// console.log(user instanceof Administrador);

// admin.p = -33;
// console.log(admin.p);
// Object.seal(admin);
// admin.hola = 'HOla';
// console.log(admin.hola);
// admin.darPermisos();
// admin.saludar();

// console.log(admin.clave);

// function potencia(x, n) {
//     let result = 1;

//     for(let i = 0; i < n; i++) {
//         result *= x;
//     }

//     return result;
// }

// console.log(potencia(2, 0));

// function potencia(x, n) {
//     if (n === 0) {
//         return 1;
//     } else {
//         return x * potencia(x, n-1);
//     }
// }

// console.log(potencia(2, 0));


// function foo(){

//     function nesteste() {
//         console.log('Nested');
//     }

//     nesteste();
//     nesteste();
// }

// foo();

// function crearContador() {
//     // let cant = 0;

//     return function() {
//         return cant++;
//     }
// }

// let cant = 3;
// let contador = crearContador();
// console.log(contador());
// console.log(contador());
// console.log(contador());
// console.log(contador());

// function lenta(x) {
//     console.log('LLame con ', x);
//     return x;
// }


let obj = {
    otroMetodo: function(){
        return 1;
    },
    lenta: function(x) {
        console.log('Lenta', x);
        return x * this.otroMetodo();
    }
}

// function cacheDecorator(func) {
//     let cache = new Map();

//     return function(x) {
//         if (cache.has(x)) {
//             return cache.get(x);
//         }

//         let result = func.call(this, x);
//         cache.set(x, result);
//         return result;
//     }
// }

// obj.lentaConCache = cacheDecorator(obj.lenta);
// console.log(obj.lentaConCache(1));
// console.log(obj.lentaConCache(1));
// console.log(obj.lentaConCache(2));
// console.log(obj.lentaConCache(2));

// let lentaConCache = cacheDecorator(lenta);
// console.log(lentaConCache(1));
// console.log(lentaConCache(1));
// console.log(lentaConCache(2));
// console.log(lentaConCache(2));

// let ob = {
//     propiedad: 'Propiedad',
//     metodo: function(){
//         console.log('Mddd', this.propiedad)
//     }
// }
// setTimeout(ob.metodo.bind(ob), 1000);

// let ob = {
//     propiedad: 'dddd',
//     lenta: [1, 2, 3],
//     listar:  function() {
//         this.lenta.forEach(x => console.log(x, this.propiedad));
//     }
// }

// ob.listar();

let ob = {
    propiedad: 'dddd',
    lenta: [1, 2, 3],
    listar:  function() {
        let that = this;
        this.lenta.forEach(function(x) {
            console.log(x, that.propiedad)
        });
    }
}


ob.listar();

