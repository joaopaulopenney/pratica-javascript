let quebrada = 0

function quebrar() {
    document.querySelector(".img").src = "img/quebrada.jpg"
    quebrada = 1
}

function ligar() {
    if(quebrada == 0) {
        document.querySelector(".img").src = "img/ligada.jpg"
    } else {

    }
}

function desligar() {
    if(quebrada == 0) {
        document.querySelector(".img").src = "img/desligada.jpg"
    } else {
        
    }
}