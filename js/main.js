const btn = document.getElementById('btn');
const icon = document.querySelector('#btn i');
const outputBox = document.getElementById('output');

function spech() {
    if (icon.classList.contains('fa-play')) {
        icon.classList.remove('fa-play')
        icon.classList.add('fa-pause')
    }
    alert('condition true');
    if (window.webkitSpeechRecognition || window.SpeechRecognition) {
        
        let speechRecognition = new webkitSpeechRecognition();
        speechRecognition.continuous = true;
        speechRecognition.interimResults = true;
        speechRecognition.lang = 'en-GB';
        speechRecognition.onresult = (event) => {
            if (event) {
                outputBox.innerHTML = event.results[0][0].transcript;
                alert(event.results[0][0].transcript);
                icon.classList.remove('fa-pause')
                icon.classList.add('fa-play')
            }

        }
        speechRecognition.start();

    }
}

btn.onclick = () => {
    spech();
}