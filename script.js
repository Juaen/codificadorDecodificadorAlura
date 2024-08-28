function criptografar() {
    let texto = document.getElementById("input-text").value;
    let textoCriptografado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    document.getElementById("output-text").value = textoCriptografado;
}

function descriptografar() {
    let texto = document.getElementById("input-text").value;
    let textoDescriptografado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    document.getElementById("output-text").value = textoDescriptografado;
}

function copiarTexto() {
    let texto = document.getElementById("output-text");
    texto.select();
    document.execCommand("copy");
    alert("Texto copiado para a área de transferência!");
}
document.addEventListener('DOMContentLoaded', function() {
    const textarea = document.querySelector('textarea');
    const outputImage = document.querySelector('.output-image');
    const container = document.querySelector('.container');
    const noMessageFound = document.querySelector('.no-message'); // Supondo que esta seja a classe do texto "Nenhuma mensagem encontrada"

    textarea.addEventListener('input', function() {
        if (textarea.value.trim().length > 0) {
            outputImage.style.display = 'none';
            noMessageFound.style.display = 'none'; // Oculta a mensagem
            container.classList.add('expanded');
        } else {
            outputImage.style.display = 'block';
            noMessageFound.style.display = 'block'; // Mostra a mensagem se o campo estiver vazio
            container.classList.remove('expanded');
        }
    });
});

