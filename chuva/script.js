const volumeInverso = 12; // Volume de gotas - quanto menor mais gotas
const root = document.documentElement;
// root.style.setProperty('--topRain', (window.innerHeight * 2) + 'px');

// let tempo = window.innerHeight / 500;
const tempo = 5;

// const rootCss = document.documentElement;

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
}
function numeroAleatorioX() {
    const max = window.innerWidth * 1.1;
    const min = 0;
    // console.log(max)
    return Math.random() * (max - min) + min;
}
function numeroAleatorioY() {
    const max = window.innerHeight;
    // const max = 2000;
    const min = 0;
    // console.log(window.innerHeight)
    return Math.random() * (max - min) + min;
}

let tempoS = (tempo * 1000);
let tempoM = (tempo * 1000) / 1.5;
let tempoL = (tempo * 1000) / 2;

definirTempoRoot()
function definirTempoRoot() {
    root.style.setProperty('--speedS', tempoS / 1000 + 's');
    root.style.setProperty('--speedM', tempoM / 1000 + 's');
    root.style.setProperty('--speedL', tempoL / 1000 + 's');
}


let alternS = false;
let alternM = false;
let alternL = false;

choveS();
choveM();
choveL();

setInterval(() => choveS(), tempoS / 2);
setInterval(() => choveM(), tempoM / 2);
setInterval(() => choveL(), tempoL / 2);

function choveS() {
    posicoesAleatorias(`small ${alternS ? 'delay' : 'start'}`);
    alternS = alternS ? false : true;
}

function choveM() {
    posicoesAleatorias(`medium ${alternM ? 'delay' : 'start'}`);
    alternM = alternM ? false : true;
}

function choveL() {
    posicoesAleatorias(`large ${alternL ? 'delay' : 'start'}`);
    alternL = alternL ? false : true;
}

/*
function resetTempoChuva() {
    clearInterval(intervalS);
    clearInterval(intervalM);
    clearInterval(intervalL);

    console.log(tempoS)
    choveS();
    choveM();
    choveL();
}
*/

/*
function aoMudarZoom() {
root.style.setProperty('--topRain', (window.innerHeight * 2) + 'px');
    tempo = window.innerHeight / 500;
    tempoS = (tempo * 1000);
    tempoM = (tempo * 1000) / 1.5;
    tempoL = (tempo * 1000) / 2;

    resetTempoChuva()
    definirTempoRoot()
}
*/
// aoMudarZoom();


/*
window.addEventListener('resize', () => {
    // console.log(window.innerHeight)
    aoMudarZoom();
});
*/

// AUDIO

window.onload = () => sonsDeChuva();
function sonsDeChuva() {
    const audio = new Audio('audio/serene-rain.mp3');
    audio.play();
    audio.loop = true;
    audio.volume = 0;

    const inicioGradual = setInterval(() => {
        const aumentoVol = 0.05
        if (audio.volume + aumentoVol <= 1) {
            audio.volume += aumentoVol
        } else {
            clearInterval(inicioGradual);
        }
    }, 50);
}


/*
if (navigator.permissions) {
    navigator.permissions.query({ name: 'autoplay' }).then()
}
*/