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

           


                mensajeTextoEncriptado.textContent = textoEncriptado; 
              
                document.getElementById("muñeco").innerHTML = document.getElementById("resultadoTexto").innerHTML; 
                document.getElementById("resultadoTexto").innerHTML = ""; 
             
                
 
                textoEncriptadoActual = textoEncriptado; 
                muñeco.style.display = "none"; // Oculta la imagen del muñeco
                mensajeResultado.style.display = "none"; 
                mensajeIngresarTexto.style.display = "none"; 
                mensajeTextoEncriptado.textContent = textoEncriptado; // Muestra el texto encriptado
                mensajeTextoEncriptado.style.display = "block"; // Asegura que el texto sea visible
                botonesCopiar.style.display = "block"; // Asegura que el botón de copiar se mantenga visible

                textoEncriptadoActual = textoEncriptado;
            
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

        muñeco.style.display = "none"; // Oculta la imagen del muñeco
        mensajeResultado.style.display = "none"; 
        mensajeIngresarTexto.style.display = "none"; 
        mensajeTextoEncriptado.textContent = textoDesencriptado; // Muestra el texto desencriptado
        mensajeTextoEncriptado.style.display = "block"; // Asegura que el texto sea visible
        botonesCopiar.style.display = "block"; // Asegura que el botón de copiar se mantenga visible
    }
}

function textoYaEncriptado(texto) { 
    return texto.includes("enter") || texto.includes("imes") || texto.includes("ai") || texto.includes("ober") || texto.includes("ufat"); 
}

function copiarTexto() { 
    const resultadoTexto = document.getElementById("resultadoTexto").textContent; 
    navigator.clipboard.writeText(resultadoTexto); 
}
