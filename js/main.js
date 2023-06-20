const btn = document.getElementById('btn');
const icon = document.querySelector('#btn i');
const outputBox = document.getElementById('output');

function spech() {
    let speechRecognition = new webkitSpeechRecognition();
    let final_transcript = "";
    speechRecognition.continuous = true;
    speechRecognition.interimResults = true;
    speechRecognition.lang = 'en-US';
    if (icon.classList.contains('fa-play')) {
        icon.classList.remove('fa-play');
        icon.classList.add('fa-pause');
    }

    speechRecognition.onresult = (event) => {
        if (event) {
            for (let i = event.resultIndex; i < event.results.length; ++i) {
                if (event.results[i].isFinal) {
                    final_transcript += event.results[i][0].transcript;
                } else {
                    interim_transcript += event.results[i][0].transcript;
                }

            }
            outputBox.innerHTML = final_transcript;
            icon.classList.remove('fa-pause');
            icon.classList.add('fa-play');
        }
    }
    speechRecognition.onError = () => {
        console.log('Somethings Wrong');
        icon.classList.remove('fa-pause');
        icon.classList.add('fa-play');
    }

    speechRecognition.start();
}

btn.onclick = () => {
    spech();
}