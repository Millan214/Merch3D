const cabecera = document.querySelector('.cabecera')
const enlaces = document.querySelectorAll('.enlace-nav')

enlaces.forEach( enlace => {
    enlace.style.color = `white`
})

addEventListener('scroll', () => {
    cabecera.style.backgroundColor = `rgba(255,255,255,${obtenerPorcentaje()})`
    if( obtenerPorcentaje() < 1 ){
        enlaces.forEach( enlace => {
            enlace.style.color = `white`
        })
    } else {
        enlaces.forEach( enlace => {
            enlace.style.color = `black`
        })
    }
})
//cabecera.classList.add('bg-dark')
const obtenerPorcentaje = () => {
    return (window.scrollY*10)/window.innerHeight
}