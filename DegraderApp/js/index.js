/* je recupere les element html pour ensuite recuperer leurs valeurs  */
const btn = document.getElementById('random')
const colorBox = document.getElementById('color-gradient')

/* avoir une couleurs random */
const getRandomColor = () => {
    const letters = '0123456789abcdef'
    let color = '#'

    for(let i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}

/*function pour changer la couleur de la box  */
const changeBackground = () => {
    let colorOne = getRandomColor()
    let colorTwo = getRandomColor()
    let colorThree = getRandomColor()

    colorBox.style.background = `linear-gradient(${colorOne},${colorTwo},${colorThree})`
}

/* test pour voir si ma function random marchait  */
console.log('coucou', getRandomColor())
console.log('coucou', getRandomColor())
console.log('coucou', getRandomColor())
