const imagens = document.querySelectorAll('.ImagemCarrossel');
let indiceAtual = 0;

function mostrarImagem(indice) {
    imagens.forEach((img, i) => {
        img.classList.remove('active');
        if (i === indice) {
            img.classList.add('active');
        }
    });
}

function proximaImagem() {
    indiceAtual = (indiceAtual + 1) % imagens.length;
    mostrarImagem(indiceAtual);
}

mostrarImagem(indiceAtual);
setInterval(proximaImagem, 5000);
