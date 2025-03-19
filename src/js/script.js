// Obtener referencia a los elementos de audio
const track1 = document.getElementById('track1');
const track2 = document.getElementById('track2');
const track3 = document.getElementById('track3');
const track4 = document.getElementById('track4');
const track5 = document.getElementById('track5');
const track6 = document.getElementById('track6');
const track7 = document.getElementById('track7');
const track8 = document.getElementById('track8');
const track9 = document.getElementById('track9');
const track10 = document.getElementById('track10');

// Obtener referencia al botón de inicio
const startBtn = document.getElementById('start-btn');

// Función para detener todos los tracks
function stopAllTracks() {
    track1.pause();
    track2.pause();
    track3.pause();
    track4.pause();
    track5.pause();
    track6.pause();
    track7.pause();
    track8.pause();
    track9.pause();
    track10.pause();
}

// Verificar si el navegador soporta la API de Web Speech
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
if (SpeechRecognition) {
    const recognition = new SpeechRecognition();
    recognition.continuous = false; // Solo escucha una vez
    recognition.interimResults = false; // No queremos resultados intermedios
    recognition.lang = 'es-ES'; // Idioma español

    // Evento cuando se detecta un resultado
    recognition.onresult = function(event) {
        const transcript = event.results[0][0].transcript.trim().toLowerCase();
        console.log("Comando detectado:", transcript);

        // Detener todos los tracks antes de reproducir uno nuevo
        stopAllTracks();

        // Usar un switch para manejar los comandos de voz
        switch (transcript) {
            case 'track 1':
                track1.play();
                console.log("Reproduciendo Track 1");
                break;
            case 'track 2':
                track2.play();
                console.log("Reproduciendo Track 2");
                break;
            case 'track 3':
                track3.play();
                console.log("Reproduciendo Track 3");
                break;
            case 'track 4':
                track4.play();
                console.log("Reproduciendo Track 4");
                break;
            case 'track 5':
                track5.play();
                console.log("Reproduciendo Track 5");
                break;
            case 'track 6':
                track6.play();
                console.log("Reproduciendo Track 6");
                break;
            case 'track 7':
                track7.play();
                console.log("Reproduciendo Track 7");
                break;
            case 'track 8':
                track8.play();
                console.log("Reproduciendo Track 8");
                break;
            case 'track 9':
                track9.play();
                console.log("Reproduciendo Track 9");
                break;
            case 'track 10':            
                track10.play();
                console.log("Reproduciendo Track 10");
                break;
            case 'pausar':
                console.log("Reproducción pausada");
                break;
            default:
                console.log("Comando no reconocido");
                break;
        }
    };

    // Evento cuando ocurre un error
    recognition.onerror = function(event) {
        console.error("Error en el reconocimiento de voz:", event.error);
    };

    // Iniciar el reconocimiento de voz al hacer clic en el botón
    startBtn.addEventListener('click', () => {
        recognition.start();
        console.log("Escuchando...");
        startBtn.textContent = "Escuchando...";
    });
} else {
    console.error("El navegador no soporta la API de reconocimiento de voz.");
}