let textoEncriptadoActual = "";

function encriptarTexto() {
    const inputTexto = document.getElementById("inputTexto").value;
    const mensajeTextoEncriptado = document.getElementById("resultadoTexto");
    const muñeco = document.getElementById("muñeco");
    const mensajeResultado = document.getElementById("mensajeResultado");
    const mensajeIngresarTexto = document.getElementById("mensajeIngresarTexto");
    const botonesCopiar = document.getElementById("botonesCopiar");
    console.log(inputTexto);
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
                muñeco.classList.add("oculto");
                mensajeResultado.classList.add("oculto");
                mensajeIngresarTexto.classList.add("oculto");
                resultadoTexto.classList.add("oculto");
                document.getElementById("muñeco_seccion").innerHTML = document.getElementById("resultadoTexto").innerHTML;
                document.getElementById("resultadoTexto").innerHTML = "";
                document.getElementById("resultadoTexto").innerHTML = textoEncriptado;
                document.getElementById("botonesCopiar").style.display = "block";

                textoEncriptadoActual = textoEncriptado;
            }
        }
    }console.log(resultadoTexto);
}

function desencriptarTexto() {
    limpiarCaja();
    const inputTexto = document.getElementById("inputTexto").value;
    const mensajeTextoEncriptado = document.getElementById("resultadoTexto");
    const muñeco = document.getElementById("muñeco");
    const mensajeResultado = document.getElementById("mensajeResultado");
    const mensajeIngresarTexto = document.getElementById("mensajeIngresarTexto");
    const botonesCopiar = document.getElementById("botonesCopiar");
    if (inputTexto && mensajeTextoEncriptado && muñeco && mensajeResultado && mensajeIngresarTexto && botonesCopiar) {
       
            let textoDesencriptado = inputTexto
                .replace(/\s*enter\s*/g, "e")
                .replace(/\s*imes\s*/g, "i")
                .replace(/\s*ai\s*/g, "a")
                .replace(/\s*ober\s*/g, "o")
                .replace(/\s*ufat\s*/g, "u");

            mensajeTextoEncriptado.textContent = textoDesencriptado;
            muñeco.classList.add("oculto");
            mensajeResultado.classList.add("oculto");
            mensajeIngresarTexto.classList.add("oculto");
            mensajeTextoEncriptado.classList.remove("oculto");
            resultadoTexto.classList.add("oculto");
            document.getElementById("muñeco_seccion").innerHTML = document.getElementById("resultadoTexto").innerHTML;
            document.getElementById("resultadoTexto").innerHTML = "";
            document.getElementById("resultadoTexto").innerHTML = textoDesencriptado;
            document.getElementById("botonesCopiar").style.display = "block";
    }
    console.log(mensajeTextoEncriptado);
    console.log(inputTexto);
    console.log(resultadoTexto);
    }

function textoYaEncriptado(texto) {
    return texto.includes("enter") || texto.includes("imes") || texto.includes("ai") || texto.includes("ober") || texto.includes("ufat");
}

function copiarTexto() {
    const resultadoTexto = document.getElementById("resultadoTexto").textContent;

    navigator.clipboard.writeText(resultadoTexto);
}

function limpiarCaja() {
    const resultadoTextoElement = document.getElementById("resultadoTexto");
    resultadoTextoElement.textContent = ""; 
}
