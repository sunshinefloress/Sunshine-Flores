const imagens = [
    "img/imagens.jpg",
    "img/imagens1.jpg",
    "img/imagens2.jpg",
    "img/imagens3.jpg",
    "img/flor4.jpg"
]
let index = 0

function trocarImagem() {
    const img = document.getElementById('flower')

    index++

    if(index >= imagens.length){
        index = 0
    }

    img.src = imagens[index]
}

setInterval(trocarImagem, 2000)

history.scrollRestoration = "manual";

window.onload = function () {
    window.scrollTo(0, 0);
}




