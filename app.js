let textoEncriptadoActual = "";

function encriptarTexto() {
    const inputTexto = document.getElementById("inputTexto").value;
    const mensajeTextoEncriptado = document.getElementById("resultadoTexto");
    const muñeco = document.getElementById("muñeco");
    const mensajeResultado = document.getElementById("mensajeResultado");
    const mensajeIngresarTexto = document.getElementById("mensajeIngresarTexto");
    const botonesCopiar = document.getElementById("botonesCopiar");

    if (inputTexto && mensajeTextoEncriptado && muñeco && mensajeResultado && mensajeIngresarTexto && botonesCopiar) {
        if (!textoYaEncriptado(inputTexto)) {
            let textoEncriptado = inputTexto
                .replace(/e/g, "enter")
                .replace(/i/g, "imes")
                .replace(/a/g, "ai")
                .replace(/o/g, "ober")
                .replace(/u/g, "ufat");

            if (textoEncriptado !== textoEncriptadoActual) {
                mensajeTextoEncriptado.textContent = textoEncriptado;
                muñeco.style.display = "none";
                mensajeResultado.style.display = "none";
                mensajeIngresarTexto.style.display = "none";
                mensajeTextoEncriptado.style.display = "block";
                botonesCopiar.style.display = "block";
                textoEncriptadoActual = textoEncriptado;
            }
        }
    }
}

function desencriptarTexto() {
    const inputTexto = document.getElementById("inputTexto").value;
    const mensajeTextoEncriptado = document.getElementById("resultadoTexto");
    const muñeco = document.getElementById("muñeco");
    const mensajeResultado = document.getElementById("mensajeResultado");
    const mensajeIngresarTexto = document.getElementById("mensajeIngresarTexto");
    const botonesCopiar = document.getElementById("botonesCopiar");
    if (inputTexto && mensajeTextoEncriptado && muñeco && mensajeResultado && mensajeIngresarTexto && botonesCopiar) {
        let textoDesencriptado = inputTexto
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");

        mensajeTextoEncriptado.textContent = textoDesencriptado;
        muñeco.style.display = "none";
        mensajeResultado.style.display = "none";
        mensajeIngresarTexto.style.display = "none";
        mensajeTextoEncriptado.style.display = "block";
        botonesCopiar.style.display = "block";
    }
}

function textoYaEncriptado(texto) {
    return texto.includes("enter") || texto.includes("imes") || texto.includes("ai") || texto.includes("ober") || texto.includes("ufat");
}

function copiarTexto() {
    const resultadoTexto = document.getElementById("resultadoTexto").textContent;
    navigator.clipboard.writeText(resultadoTexto);
}