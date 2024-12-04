let posizione =  0
const Lunghezzalinea = 96
let avanti = true

const cursore = document.getElementById('cursore-linea')
const button = document.getElementById('cursore-linea')


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
}
button.addEventListener('click', avanzaTempo)
