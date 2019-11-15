// function sayHi(){
//     console.log('Hola');
// }

// window.sayHi();

// document.body.style.background = 'red';
// console.log(document.body.firstChild.nextSibling);
// console.log(document.body.firstElementChild.parentElement);

// let element = document.getElementById('elem');
// element.style.background = 'green';

// elem.style.background = 'red';

// let elem = document.querySelector();
// elem.style.background = 'red';

// let elements = document.querySelectorAll('div');
// console.log(elements);

// elem.textContent = '<p>PPPP</p>';

// let elemento = document.createElement('p');
// elemento.innerHTML = '<p>Pppp</p>';

// elem.after(elemento);

// elem.remove();

// document.body.data = {name: 'Camila'};
// document.body.sayMyName = fu

// elem.setAttribute('state', 'old');
// console.log(elem.removeAttribute('state'));
// console.log(elem.getAttribute('state'));

// console.log(elem.dataset.state);

// document.body.classList.add('ejemplo');
// document.body.classList.toggle('ejemplo');
// console.log(document.body.classList.contains('ejemplo'));

// let computedStyle = getComputedStyle(document.body);
// console.log(computedStyle.color);

function handlerClick(event) {
    let t = event.currentTarget;
    console.log('Handlre');
}

boton.onclick = '';
// boton.onclick = function() {
//     handlerClick();
// }

boton.addEventListener('click', () => console.log('Handler'));
boton.addEventListener('click', handlerClick);

boton.removeEventListener('click', handlerClick);

function hendlerP(event) {
    event.stopImmediatePropagation();
    console.log('handler p');
}

p.addEventListener('click', () => console.log('Otro hander'));