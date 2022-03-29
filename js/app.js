const displayValorAnterior = document.getElementById('valor_anterior');
const displayValorActual = document.getElementById('valor_actual');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');



const display = new Display(displayValorAnterior, displayValorActual);

botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => {
        display.agregarNumero(boton.innerHTML)
    });
});

botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => {
        display.computar(boton.value);
    });
});

const switc = document.getElementById('switch');
 
switc.addEventListener('click', () =>{
    let body = document.body;
    body.classList.toggle('color')
});