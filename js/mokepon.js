const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('reiniciar')
const botonMascotaJugador = document.getElementById('boton-mascota')
const botonFuego = document.getElementById('boton-fuego')
const botonAgua = document.getElementById('boton-agua')
const botonTierra = document.getElementById('boton-tierra')
const botonReiniciar = document.getElementById('boton-reiniciar')
const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
const spanMascotaJugador = document.getElementById('mascota-jugador')
const spanMascotaEnemigo = document.getElementById('mascota-enemigo')
const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')
const sectionMensajes = document.getElementById('resultado')
const ataqueDelJugador = document.getElementById('ataques-del-jugador')
const ataqueDelEnemigo = document.getElementById('ataques-del-enemigo')
const contenedorTarjetas = document.getElementById('contenedorTarjetas')

let mokepones = []
let ataqueJugador
let ataqueEnemigo
let opcionDeMokepones
let inputHipodoge
let inputCapipepo 
let inputRatigueya 
let vidasJugador = 3 
let vidasEnemigo = 3

class Mokepon
{   constructor(nombre, foto, vida) 
    {   this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }

}

let hipodoge = new Mokepon('Hipodoge', './hipodoge.png', 5)
let capipepo = new Mokepon('Capipepo','./capipepo.png', 5)
let ratigueya = new Mokepon('Ratigueya', './ratigueya.png', 5)

hipodoge.ataques.push(
    { nombre: '💧', id: 'boton-agua'}, 
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '🌍', id: 'boton-tierra'},
)

capipepo.ataques.push(
    { nombre: '🌍', id: 'boton-tierra'}, 
    { nombre: '🌍', id: 'boton-tierra'},
    { nombre: '🌍', id: 'boton-tierra'},
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '💧', id: 'boton-agua'},
)

ratigueya.ataques.push(
    { nombre: '🔥', id: 'boton-fuego'}, 
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '🌍', id: 'boton-tierra'},
)

mokepones.push(hipodoge, capipepo, ratigueya)

function iniciarJuego() {

    sectionSeleccionarAtaque.style.display = 'none'
    
    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `
        <input type="radio" name="mascota" id=${mokepon.nombre} />
        <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
            <p>${mokepon.nombre}</p>
            <img src=${mokepon.foto} alt=${mokepon.nombre}>
        </label>
        `
    contenedorTarjetas.innerHTML += opcionDeMokepones

    inputHipodoge = document.getElementById('Hipodoge')
    inputCapipepo = document.getElementById('Capipepo')
    inputRatigueya = document.getElementById('Ratigueya')
        
    })
    sectionReiniciar.style.display = 'none'
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
    botonFuego.addEventListener('click', ataqueFuego)
    botonAgua.addEventListener('click', ataqueAgua)   
    botonTierra.addEventListener('click', ataqueTierra) 
    botonReiniciar.addEventListener('click', reiniciarJuego)
    
}
function seleccionarMascotaJugador() {
    
    sectionSeleccionarMascota.style.display = 'none'
    sectionSeleccionarAtaque.style.display = 'flex'

        if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = inputHipodoge.id
    }    else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = inputCapipepo.id
    }    else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = inputRatigueya.id
    }    else {
        alert("Selecciona una mascota") 
    }
    
    seleccionarMascotaEnemigo()
}
function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(1,3)

    if (mascotaAleatoria == 1) {
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
     } else if (mascotaAleatoria == 2) {
        spanMascotaEnemigo.innerHTML = 'Capipepo'
     } else {
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
     }

}
function ataqueFuego() {
    ataqueJugador = "FUEGO"
    ataqueAleatorioEnemigo()
}
function ataqueAgua() {
    ataqueJugador = "AGUA"
    ataqueAleatorioEnemigo()
}
function ataqueTierra() {
    ataqueJugador = "TIERRA"
    ataqueAleatorioEnemigo()
}
function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,3)
    
    if (ataqueAleatorio == 1) {
        ataqueEnemigo = "FUEGO"
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = "AGUA"
    } else { 
        ataqueEnemigo = "TIERRA"
    }

    combate()
}
function combate() 
{
    

        if(ataqueEnemigo == ataqueJugador){
        crearMensaje("Empate")
    }   else if(ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') {
        crearMensaje("Ganaste")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo 

    }   else if(ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') {
        crearMensaje("Ganaste")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }
        else if(ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA') {
        crearMensaje("Ganaste")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo        
    }   else {
        crearMensaje("Perdiste")  
        vidasJugador--  
        spanVidasJugador.innerHTML = vidasJugador        
    }

    revisarVidas()

}
function revisarVidas() {
    if (vidasEnemigo == 0) {
    crearMensajeFinal("Felicitaciones!! Ganaste 🏆")
     } else if (vidasJugador == 0) {
    crearMensajeFinal("Lo siento perdiste 🥲")
    }
}  
function crearMensaje(resultado) {

    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    ataqueDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataqueDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)

}
function crearMensajeFinal(resultadoFinal) {

    sectionMensajes.innerHTML = resultadoFinal
    botonFuego.disabled = true  
    botonAgua.disabled = true       
    botonTierra.disabled = true
    sectionReiniciar.style.display = 'block'

}
function reiniciarJuego() {
        location.reload()

}
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)

