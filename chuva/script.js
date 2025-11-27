const volumeInverso = 12; // Volume de gotas - quanto menor mais gotas
const tempo = 4; // Velocidade - quanto menor mais rápido
const root = document.documentElement;
// root.style.setProperty('--topRain', (window.innerHeight * 2) + 'px');

// let tempo = window.innerHeight / 500;

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
    // const max = window.innerHeight;
    const max = 2500;
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

window.onload = () => sons();
function sons(vol = 0) {
    const audio = new Audio('audio/serene-rain.mp3');
    audio.play();
    audio.loop = true;
    audio.volume = vol;

    const inicioGradual = setInterval(() => {
        const aumentoVol = 0.05
        if (audio.volume + aumentoVol <= 0.5) {
            audio.volume += aumentoVol
        } else {
            clearInterval(inicioGradual);
        }
    }, 50);
}
const musica = new Audio('audio/Apocalyptica-NothingElseMatters.mp3');
function musicaPlay(vol = 0.4, tempo = 0) {
    if (vol < 0 || vol > 1) {
        return "Erro: O volume deve estar entre 0 e 1";
    }
    if (tempo < 0 || tempo > 203) {
        return "Erro: O tempo deve estar entre 0 e 203 segundos";
    }
    musica.currentTime = tempo;
    musica.volume = vol
    musica.loop = true
    musica.play()
    return "Musica iniciada em " + tempo + " segundos com volume " + vol;
}
function musicaPause() {
    musica.pause();
}
console.log("musicaPlay([volume: 0 - 1] (opcional, valor padrão = 0.4), [tempo: 0 - 203 segundos] (opcional, valor padrão = 0))")

/*
if (navigator.permissions) {
    navigator.permissions.query({ name: 'autoplay' }).then()
}
*/