const qtdGotas = 75; // Quantidade de gotas por div
const tempo = 3;    // Quanto menor mais rápido

function posicoesAleatorias(tamanho) {
    // console.log("Mudou " + tamanho);
    const gotas = Array.from(document.getElementsByClassName(tamanho));
    gotas.forEach((elemento) => {

        let shadowBox = '';
        for (let i = 1; i <= qtdGotas; i++) {
            shadowBox = shadowBox + `${numeroAleatorioX()}px -${numeroAleatorioY() * 2}px var(--bColor)${i === qtdGotas ? '' : ','}`
        };
        elemento.style.boxShadow = shadowBox;
    });
} function numeroAleatorioX() {
    let max = window.innerWidth >= 1700 ? window.innerWidth * 1.1 : 1700 * 1.1;
    let min = 0;
    return Math.random() * (max - min) + min;
} function numeroAleatorioY() {
    let max = window.innerHeight;
    let min = 0;
    console.log(max)
    return Math.random() * (max - min) + min;
}
const tempoS = (tempo * 1000);
const tempoM = (tempo * 1000) / 1.25;
const tempoL = (tempo * 1000) / 1.5;

const root = document.documentElement;
root.style.setProperty('--speedS', tempoS / 1000 + 's');
root.style.setProperty('--speedM', tempoM / 1000 + 's');
root.style.setProperty('--speedL', tempoL / 1000 + 's');

let alternS = false;
choveS();
setInterval(() => choveS(), tempoS / 2);
function choveS() {
    posicoesAleatorias(`small ${alternS ? 'delay' : 'start'}`);
    alternS = alternS ? false : true;
}
let alternM = false;
choveM();
setInterval(() => choveM(), tempoM / 2);
function choveM() {
    posicoesAleatorias(`medium ${alternM ? 'delay' : 'start'}`);
    alternM = alternM ? false : true;
}
let alternL = false;
choveL();
setInterval(() => choveL(), tempoL / 2);
function choveL() {
    posicoesAleatorias(`large ${alternL ? 'delay' : 'start'}`);
    alternL = alternL ? false : true;
}
