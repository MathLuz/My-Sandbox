const video = document.getElementById('video');
const startBtn = document.getElementById('startBtn');
const status = document.getElementById('status');
const placeholder = document.getElementById('placeholder');
const flipCheckbox = document.getElementById('flipCheckbox');

let stream = null;
let isRunning = false;

startBtn.addEventListener('click', async () => {
    if (isRunning) {
        stopCamera();
    } else {
        await startCamera();
    }
});

flipCheckbox.addEventListener('change', () => {
    if (flipCheckbox.checked) {
        video.style.transform = 'scaleX(-1)';
    } else {
        video.style.transform = 'scaleX(1)';
    }
});

async function startCamera() {
    try {
        startBtn.disabled = true;
        status.textContent = 'Solicitando permissão da câmera...';
        status.className = '';
        
        // Solicita acesso à câmera
        stream = await navigator.mediaDevices.getUserMedia({ 
            video: { 
                width: { ideal: 1280 },
                height: { ideal: 720 },
                facingMode: 'user'
            },
            audio: false 
        });
        
        // Conecta o stream ao elemento de vídeo
        video.srcObject = stream;
        video.classList.add('active');
        placeholder.classList.add('hidden');
        
        status.textContent = 'Câmera ativada com sucesso!';
        status.className = 'success';
        startBtn.textContent = 'Parar Câmera';
        startBtn.disabled = false;
        isRunning = true;
        
    } catch (error) {
        console.error('Erro ao acessar a câmera:', error);
        
        let errorMessage = 'Erro ao acessar a câmera. ';
        
        if (error.name === 'NotAllowedError') {
            errorMessage += 'Permissão negada.';
        } else if (error.name === 'NotFoundError') {
            errorMessage += 'Nenhuma câmera encontrada.';
        } else if (error.name === 'NotReadableError') {
            errorMessage += 'Câmera está em uso por outro aplicativo.';
        } else {
            errorMessage += error.message;
        }
        
        status.textContent = errorMessage;
        status.className = 'error';
        startBtn.disabled = false;
        isRunning = false;
    }
}

function stopCamera() {
    if (stream) {
        stream.getTracks().forEach(track => track.stop());
        video.srcObject = null;
        video.classList.remove('active');
        placeholder.classList.remove('hidden');
        
        status.textContent = 'Câmera desativada.';
        status.className = '';
        startBtn.textContent = 'Iniciar Câmera';
        
        stream = null;
        isRunning = false;
    }
}
