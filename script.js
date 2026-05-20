/*const imagens = [
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
*/



const produtos = document.querySelectorAll(".produto");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

produtos.forEach(p => observer.observe(p));


function abrirZoom(img) {
    const zoom = document.getElementById("zoom");
    const zoomImg = document.getElementById("zoomImg");

    zoom.style.display = "flex";
    zoomImg.src = img.src;
}

function fecharZoom() {
    document.getElementById("zoom").style.display = "none";
}


window.addEventListener("load", () => {
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 50);
});

