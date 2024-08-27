function encryptText() {
    let textInput = document.getElementById("textInput").value;

    if (/[A-Z]/.test(textInput)) {
        alert("El texto contiene letras mayúsculas, por favor use solo letras minúsculas.");
        updateOutput("");
        return;
    }

    if (/[^a-z\s]/.test(textInput)) {
        alert("El texto contiene caracteres especiales no permitidos.");
        updateOutput("");
        return;
    }

    if (textInput.trim() === "") {
        alert("Por favor, ingrese un texto para encriptar.");
        updateOutput(""); 
        return;
    }

    const isAlreadyEncrypted = /(enter|imes|ai|ober|ufat)/.test(textInput);
    if (isAlreadyEncrypted) {
        alert("El texto ya está encriptado.");
        updateOutput(""); 
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
    let textInput = document.getElementById("textInput").value;

    if (/[A-Z]/.test(textInput)) {
        alert("El texto contiene letras mayúsculas, por favor use solo letras minúsculas.");
        updateOutput("");
        return;
    }

    if (/[^a-z\s]/.test(textInput)) {
        alert("El texto contiene caracteres especiales no permitidos.");
        updateOutput("");
        return;
    }

    if (textInput.trim() === "") {
        alert("Por favor, ingrese un texto para desencriptar.");
        updateOutput("");
        return;
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
        outputMessage.textContent = "Ningún mensaje fue encontrado";
        copyButton.style.display = "none"; 
        logo.style.display = "block"; 
        instructions.style.display = "block"; 
    }
}


