const imagens = [
    "img/flor1.jpg",
    "img/flor2.jpg",
    "img/flor3.jpg",
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




