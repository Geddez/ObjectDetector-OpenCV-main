const button = document.querySelector("#speech");

window.SpeechRecognition = webkitSpeechRecognition || window.SpeechRecognition;
const synth = window.speechSynthesis;
recognition = new SpeechRecognition();
recognition.interinResult = true;

button.addEventListener('click', () => {
    dictate();
});
const dictate = () => {
    recognition.start();
    recognition.onresult = (event) => {
        console.log(event);
    }

}