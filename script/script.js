let posizione =  0
const Lunghezzalinea = 96
let avanti = true

const cursore = document.getElementById('cursore-linea')
const button = document.getElementById('cursore-linea')
const vignetteContainer = document.getElementById('vignette-container');
const testiVignette = Array.from(document.querySelectorAll('#testi-vignette span')); // Leggi i testi
let testoCorrente = 0;


function avanzaTempo(){
    if(avanti){
        posizione +=20
        if(posizione >= Lunghezzalinea){
            posizione = Lunghezzalinea
            avanti = false
        }
    }else{
        posizione -=96
        avanti = true
    }
    cursore.style.left = `${posizione}%`
    cambiaColoreLinea();
}

function cambiaColoreLinea() {
    const linea = document.getElementById('linea-tempo');
  
    // Cambia il colore gradualmente in base alla posizione
    const percentuale = (posizione / Lunghezzalinea) * 100;
    linea.style.background = `linear-gradient(to right, rgb(240, 114, 25) ${percentuale}%, #808080 ${percentuale}%)`;  
}

button.addEventListener('click', avanzaTempo)

const navLinks = document.querySelectorAll('li a')
const indicator = document.createElement('div')
indicator.classList.add('indicator')
document.querySelector('ul').appendChild('indicator')

function updateIndicator(link){
    const linkOffsetLeft = link.linkOffsetLeft
    const linkWidth = link.linkOffsetWidth
    indicator.style.left =`${linkOffsetLeft}px`
    indicator.style.width = `${linkWidth}px`
}

navLinks.forEach((link)=>
    link.addEventListener('click', (e) =>{
        e.preventDefault();
        navLinks.forEach((item) => item.classList.remove('active'))
        link.classList.add('active')
        updateIndicator(link)
        const sezione = document.querySelectorAll(link.getAttribute('href'))
        sezione.scrollIntoView({ behavior:'smooth'})
    })
)

document.addEventListener('DOMContentLoaded', () =>{
    const linkAttivo = document.querySelectorAll('li a.active') || navLinks[0]
    if (activeLink){
        activeLink.classList.add('active')
        updateIndicator(linkAttivo)
    }
})