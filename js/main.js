const btn = document.getElementById('btn');
const icon = document.querySelector('#btn i');
const outputBox = document.getElementById('output');

function spech() {
    let speechRecognition = new webkitSpeechRecognition();
    let final_transcript = "";
    alert('hey');
    speechRecognition.continuous = true;
    speechRecognition.interimResults = true;
    speechRecognition.lang = 'en-US';

    speechRecognition.onend = () => {
        icon.classList.remove('fa-pause')
        icon.classList.add('fa-play')
    };

    speechRecognition.onresult = (event) => {
        for (let i = event.resultIndex; i < event.results.length; ++i) {
            if (event.results[i].isFinal) {
                final_transcript += event.results[i][0].transcript;
            } else {
                interim_transcript += event.results[i][0].transcript;
            }
        }
        outputBox.innerHTML = final_transcript ? final_transcript : interim_transcript;
        alert(final_transcript ? final_transcript : interim_transcript);

    }

    speechRecognition.start();
}

btn.onclick = () => {
    spech();
}