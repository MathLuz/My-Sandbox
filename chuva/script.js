const volumeInverso = 18; // Volume de gotas - quanto menor mais gotas
const tempo = 6;         // Tempo de passagem - quanto menor mais rápido

function posicoesAleatorias(tamanho) {
    // console.log("Mudou " + tamanho);
    const qtdGotas = Number((window.innerWidth / volumeInverso).toFixed(0));
    // console.log(qtdGotas)
    const gotas = Array.from(document.getElementsByClassName(tamanho));
    gotas.forEach((elemento) => {

        let shadowBox = '';
        for (let i = 1; i <= qtdGotas; i++) {
            shadowBox = shadowBox + `${numeroAleatorioX()}px -${numeroAleatorioY() * 2}px var(--bColor)${i === qtdGotas ? '' : ','}`
        };
        elemento.style.boxShadow = shadowBox;
    });
} function numeroAleatorioX() {
    let max = window.innerWidth;
    let min = 0;
    // console.log(max)
    return Math.random() * (max - min) + min;
} function numeroAleatorioY() {
    let max = window.innerHeight;
    let min = 0;
    // console.log(max)
    return Math.random() * (max - min) + min;
}
const tempoS = (tempo * 1000);
const tempoM = (tempo * 1000) / 1.5;
const tempoL = (tempo * 1000) / 2;

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
