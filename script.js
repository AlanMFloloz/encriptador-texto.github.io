// 📌 Definimos las constantes
const textoArea = document.querySelector(".cajatexto");
const mensajeArea = document.querySelector(".mensaje-resultado");
const botonCopiar = document.querySelector(".btn-copiar");
const noMunheco = document.querySelector(".contenedor-munheco");
const parrafos = document.querySelector(".contenedor-parrafo");
const botonReiniciar = document.querySelector(".btn-reiniciar");
botonCopiar.style.display = "none";
botonReiniciar.style.display = "none";

function validarTexto() {
    let textoEscrito = document.querySelector(".cajatexto").value;
    let validador = textoEscrito.match(/^[a-z]*$/);

    if (!validador || validador === 0) {
        alert(
            "Solo son permitidas letras minúsculas, sin acentos y sin espacios"
        );
        location.reload();
        return true;
    }
}

function btnReiniciar() {
    noMunheco.style.display = "block";
    parrafos.style.display = "block";
    mensajeArea.value = "";
    botonReiniciar.style.display = "none";
    mensajeArea.style.display = "none";
}

function btnEncriptar() {
    if (!validarTexto()) {
        const textoEncriptado = encriptar(textoArea.value);
        mensajeArea.value = textoEncriptado;
        noMunheco.style.display = "none";
        parrafos.style.display = "none";
        textoArea.value = "";
        botonCopiar.style.display = "block";
        botonReiniciar.style.display = "block";
        mensajeArea.style.display = "block";
    }
}

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

// Funcion de encriptado
function encriptar(stringEncriptado) {
    let arrayCodigo = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"],
    ];

    stringEncriptado = stringEncriptado.toLowerCase();

    for (let i = 0; i < arrayCodigo.length; i++) {
        if (stringEncriptado.includes(arrayCodigo[i][0])) {
            stringEncriptado = stringEncriptado.replaceAll(
                arrayCodigo[i][0],
                arrayCodigo[i][1]
            );
        }
    }

    return stringEncriptado;
}

function btnDesencriptar() {
    const textoEncriptado = desencriptar(textoArea.value);
    mensajeArea.value = textoEncriptado;
    textoArea.value = "";
    noMunheco.style.display = "none";
    parrafos.style.display = "none";
}
// Funcion de Desencriptado
function desencriptar(stringDesencriptado) {
    let arrayCodigo = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"],
    ];

    stringDesencriptado = stringDesencriptado.toLowerCase();

    for (let i = 0; i < arrayCodigo.length; i++) {
        if (stringDesencriptado.includes(arrayCodigo[i][1])) {
            stringDesencriptado = stringDesencriptado.replaceAll(
                arrayCodigo[i][1],
                arrayCodigo[i][0]
            );
        }
    }

    return stringDesencriptado;
}

function copiar() {
    mensajeArea.select();
    navigator.clipboard.writeText(mensajeArea.value);
    mensajeArea.value = "";
    alert("Texto Copiado");
    mensajeArea.setSelectionRange(0, 99999);
}
