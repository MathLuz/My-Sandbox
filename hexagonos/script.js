
document.addEventListener('mousemove', (event) => {
    const fundo = document.querySelector('.luzDeFundo');
    let luzHeight = (window.getComputedStyle(fundo).height).replace("px","");
    let x = event.clientX - luzHeight/2;
    let y = event.clientY - luzHeight/2;
    fundo.style.top = y + "px";
    fundo.style.left = x + "px";
});
const container = document.querySelector('.container');
const linhas = 9;
const colunas = 15;
for (let i = 0; i < linhas; i++){
    container.innerHTML += `<div class="linha"></div>`;
    for(let j = 0; j < colunas; j++){
        let linha = document.querySelectorAll('.linha');

        linha[i].innerHTML += `<div class="hexagono"></div>`
    }
}
