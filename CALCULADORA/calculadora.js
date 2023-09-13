'use strict';

const display = document.getElementById('display');
const numero = document.querySelectorAll('[id*=tecla]');

numeros.forEach(numero => 
    numero.addEventListener('click', inserirNumero)
);