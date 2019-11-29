// import User from './modulo.js';

// let user = new User();


// function f(){
//     // console.log('Fuction');f
//     setTimeout(() => console.log('Fucniton'), 1000);
// }

// console.log('antes');
// f();
// console.log('despues');

// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve(1), 1000);
// })

// promise.then(result => {return 'Hola'}).
// then(result => console.log(result)).
// catch(error => console.log('Error', error)).finally(() => console.log('Finally'));

// let promises = Promise.race([
//     new Promise((resolve, reject) => setTimeout(() => resolve(1), 10000) ),
//     new Promise((resolve, reject) => setTimeout(() => reject(2), 2000)),
//     new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),    
// ])

// promises.then(result => console.log(result));

// fetch('https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=london')
// .then(response => response.json())
// .then(response => console.log(response));

// async function foo() {
//     let result = await new Promise((resolve, reject) => setTimeout(() => resolve(2), 2000));
//     // console.log('Probando');
//     console.log(result);
// }

// foo();


// async function doFetch() {
//     let result = await fetch('https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=london');
//     let res = await result.json();
//     console.log(res);
// }

// doFetch();

// (async function() {
//     let result = await fetch('https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=london');
//     let res = await result.json();
//     console.log(res);
// })();