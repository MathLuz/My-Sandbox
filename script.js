// Função para o botão "não" correr

function correNao() {
  const idnao = document.getElementById('nao');

  // Dimensões da viewport
  var larguraViewport = window.innerWidth || document.documentElement.clientWidth;
  var alturaViewport = window.innerHeight || document.documentElement.clientHeight;

  // Dimensões da div não
  var larguraNao = idnao.offsetWidth;
  var alturaNao = idnao.offsetHeight;

  // Alcance do botão
  var mer = 0.1;
  var minX = -((larguraViewport/2-mer) - larguraNao);
  var minY = -((alturaViewport/2-mer) - alturaNao);
  var maxX = (larguraViewport/2+mer) - larguraNao;
  var maxY = (alturaViewport/2+mer) - alturaNao;

  var numX = Math.floor(Math.random() * (maxX - minX + 1)) + minX;
  var numY = Math.floor(Math.random() * (maxY - minY + 1)) + minY;

  console.log(numX + " - " + numY);

  idnao.style.cssText = 'top:' + numY + 'px;' + 'left:' + numX + 'px';
}

// Função para o botão "sim" mostrar a resposa trocando as class

function sim() {

  const trocaIdConfete = document.getElementById("confete");
  trocaIdConfete.classList.remove("confeteOff");

  const trocaIdForm = document.getElementById("form");
  trocaIdForm.classList.remove("formPad");
  trocaIdForm.classList.add("formSim");
}

// Função recarregar o form

function refresh() {

  const trocaIdConfete = document.getElementById("confete");
  trocaIdConfete.classList.add("confeteOff");

  const trocaIdForm = document.getElementById("form");
  trocaIdForm.classList.remove("formSim");
  trocaIdForm.classList.add("formPad");

  const idnao = document.getElementById('nao');
  idnao.style.cssText = '';
}


// Script Confete

// Configurações
var maxConfetti = 150;  // Número máximo de confetes
var particleSpeed = 4; //  Velocidade dos confetes
var particleSize = 6; //   Tamanho dos confetes

// Cria o canvas
var canvas = document.getElementById("confete");
var context = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Array de cores para os confetes
var colors = [
  "#ff4136",     // vermelho
  "#0074d9",    // azul
  "#2ecc40",   // verde
  "#ffdc00",  // amarelo
  "#ff851b", // laranja
  "#b10dc9" // roxo
];

// Cria os confetes
var particles = [];
for (var i = 0; i < maxConfetti; i++) {
  particles.push({
    x: Math.random() * canvas.width,                              // posição inicial x
    y: Math.random() * canvas.height,                            // posição inicial y
    vx: (Math.random() - 0.5) * particleSpeed,                  // velocidade x
    vy: (Math.random() - 0.5) * particleSpeed,                 // velocidade y
    color: colors[Math.floor(Math.random() * colors.length)], // cor
    size: Math.floor(Math.random() * particleSize) + 4       // tamanho
  });
}

// Função para atualizar a posição dos confetes
function update() {
  context.clearRect(0, 0, canvas.width, canvas.height); // Limpa o canvas

  // Atualiza a posição dos confetes
  for (var i = 0; i < particles.length; i++) {
    particles[i].x += particles[i].vx;
    particles[i].y += particles[i].vy;

    // Verifica se o confete saiu da tela
    if (particles[i].x > canvas.width || particles[i].x < 0) {
      particles[i].vx *= -1;
    }
    if (particles[i].y > canvas.height || particles[i].y < 0) {
      particles[i].vy *= -1;
    }

    // Desenha o confete
    context.beginPath();
    context.arc(
      particles[i].x,
      particles[i].y,
      particles[i].size,
      0,
      Math.PI * 2
    );
    context.fillStyle = particles[i].color;
    context.fill();
  }

  // Repete a atualização
  requestAnimationFrame(update);
}

// Inicia a animação
update();
