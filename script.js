function acceptValentine(message) {
    document.getElementById("response").textContent = message;
    document.getElementById("next-options").style.display = "block";
}
function nextQuestion(message) {
    document.getElementById("follow-up").textContent = message;
}
