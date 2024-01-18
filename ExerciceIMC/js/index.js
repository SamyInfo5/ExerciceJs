/* Make / Create the Element Html */
const btn = document.querySelector('.send')
const size = document.getElementById('height')
const weight = document.getElementById('weight')
const resul = document.querySelector('.resultat')
const resultat = document.createElement('p')

/* functions for calculate imc */
const IMC = (a, b) => {
    return a / (b * b)
}

/* ecouteur d'evenement btn */
btn.addEventListener('click', function() {
    const sizeValue = size.value
    const weightValue = weight.value
    const resFun= IMC(weightValue, sizeValue)
    resultat.innerHTML = `Your IMC : ${resFun}`
    resul.appendChild(resultat)
})
