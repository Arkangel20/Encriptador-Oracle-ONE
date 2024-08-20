function encryptText() {
    const textInput = document.getElementById("textInput").value;

    if (textInput.trim() === "") {
        alert("Por favor, ingrese un texto para encriptar.");
    }

    const isAlreadyEncrypted = /(enter|imes|ai|ober|ufat)/.test(textInput);
    if (isAlreadyEncrypted) {
        alert("El texto ya está encriptado.");
        return;
    }

    const encryptedText = textInput
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    updateOutput(encryptedText);
}

function decryptText() {
    const textInput = document.getElementById("textInput").value;

    if (textInput.trim() === "") {
        alert("Por favor, ingrese un texto para desencriptar.");
    }

    const decryptedText = textInput
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    updateOutput(decryptedText);
}

function copyToClipboard() {
    const textOutput = document.querySelector(".output-section .message-validation__message").textContent;
    
    navigator.clipboard.writeText(textOutput)
        .then(() => {
            alert("Texto copiado al portapapeles");
        })
        .catch(err => {
            console.error("Error al copiar el texto: ", err);
        });
}

function updateOutput(text) {
    const outputMessage = document.querySelector(".output-section .message-validation__message");
    const copyButton = document.getElementById("copyButton");
    const logo = document.querySelector(".output-section__logo");
    const instructions = document.querySelector(".message-validation__instructions");

    if (text.trim() !== "") { 
        outputMessage.textContent = text;
        copyButton.style.display = "inline-block"; 
        logo.style.display = "none"; 
        instructions.style.display = "none"; 
    } else {
        copyButton.style.display = "none"; 
        logo.style.display = "block"; 
        instructions.style.display = "block"; 
    }
}
