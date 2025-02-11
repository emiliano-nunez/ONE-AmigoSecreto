let input = document.getElementById('input');
let info = document.getElementById('info');
let info2 = document.getElementById('info2');
let list = document.getElementById('list');

let amigos = [];
let amigo = '';

function validarEntrada() {
    if (input.value === '' || !input.value || input.value === ' ') {
        info.innerText = 'Debes escribir un nombre';
        info.style.color = '#DDE423';
        return false;
    } else{
        info.style.color = '#4CAF50';
        info.innerText = 'Añade otro amigo!';
        return true;
    }
}

function agregar() {
    if (validarEntrada(amigo)) {
        amigo = input.value;
        amigos.push(amigo);
        input.value = '';
        mostrar();
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

function sortear() {
    let cantidad = amigos.length;
    if (cantidad < 2) {
        info2.style.color = '#3f8eb2';
        info2.innerText = 'Debe haber al menos dos amigos para sortear!';
    } else {
        info2.style.color = "#fff"
        info2.innerText = 'Añade a tus amigos a la lista de la sección';
        info.style.color = '#FFF';
        info.innerText = '';
        let ganador = Math.floor(Math.random() * amigos.length);
        limpiarYMostrarGanador(amigos[ganador]);
    }

}

function confetti() {
  confetti({
    particleCount: 500, 
    spread: 80,
    origin: { y: .8 },
    colors: ['#fee0be', '#5ff9b1', '#ff8f9b', '#eba1ff', '#5ae0a1'],
  });
}

function limpiarYMostrarGanador(ganador) {
    confetti();
    list.innerHTML = `<h2>Ganó ${ganador}!!!</h2>`;
    return;
}
