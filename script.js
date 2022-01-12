let btnColorTheme = document.getElementById('color-theme')
let icon = document.getElementById ('icon')
icon.style.color = "black"

btnColorTheme.addEventListener('click', (event) => {

    event.preventDefault()

    if(icon.style.color === 'black'){
        icon.style.color = "white"
        document.body.style.background = "black"
        document.body.style.color = "white"
    } else{
        icon.style.color = "black"
        document.body.style.background = "white"
        document.body.style.color = "black"
    }

 })