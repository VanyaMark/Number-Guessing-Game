// Good luck!

// Variables de estado iniciales. Puede que falta alguna...

let estoyJugando = true;
let numeroCorrecto = Math.floor(Math.random() * 100);
let numIntentos = 10;

// Actualizar el innerHTML del nodo adecuado con el número de intentos iniciales

const remainingGuesses = document.querySelector('.lastResult');
remainingGuesses.innerHTML = numIntentos;
let userGuess = document.getElementById('guessField')

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault(); // Impedimos que el formulario haga un petición GET
  console.log(userGuess.value)
  // Comprobar si el número que ha puesto el usuario es mayor o menor que el numeroCorrecto. Tomar decisiones

});
