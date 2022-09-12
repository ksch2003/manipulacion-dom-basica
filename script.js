const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

btn.addEventListener('click', btnOnclick);

function btnOnclick() {
    const sumaInputs = parseInt(input1.value) + parseInt(input2.value)
    pResult.innerText = 'Resultado: ' + sumaInputs;
}


// form.addEventListener('submit', sumatInputValues);

// function sumatInputValues(event) {
//     console.log(event);
//     event.preventDefault(); 
//     const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
//     pResult.innerText = 'Resultado: ' + sumaInputs;
// }

