const lineas = document.querySelectorAll('.a-underline')

lineas.forEach( linea => {
    let parent = linea.parentElement
    parent.addEventListener('mouseover', () => {
        linea.style.width = '100%'
    })
    parent.addEventListener('mouseout', () => {
        linea.style.width = '0%'
    })
})