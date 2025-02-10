
const button = document.getElementById('button');
let input = document.getElementById('input');
let info = document.getElementById('info');
let list = document.getElementById('list');

let amigos = [];
let amigo = '';

function validarEntrada() {
    if (input.value === '' || !input.value || input.value === ' ') {
        info.innerHTML = 'Debes escribir un nombre';
        info.style.color = '#DDE423';
        return false;
    } else{
        info.style.color = '#4CAF50';
        info.innerHTML = 'Añade otro amigo!';
        return true;
    }
}

function agregar() {
    if (validarEntrada(amigo)) {
        amigo = input.value;
        amigos.push(amigo);
        input.value = '';
        mostrar();
        console.log(amigos);
    } else {
        console.log("error de entrada");
    }
}

function mostrar() {
    list.innerHTML = "";
    for (let amigo = 0; amigo < amigos.length; amigo++) {
        list.innerHTML += `<li>${amigos[amigo]}</li>`;
    }
}