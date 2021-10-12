// Função que valida o email do campo
function sendEmail() {
    // Recebe o objeto do input
    const input = document.getElementById("email-address");

    // Verifica se o email digitado é válido
    if (input.checkValidity() === true) {
        // Remove o ícone do erro
        document.getElementById("icon-erro").style.display = "none";
        // Remove a mensagem do erro
        document.getElementById("error-span").style.display = "none";

        // Remove o valor do input
        input.value = "";
    } else {
        // Mostra o ícone do erro
        document.getElementById("icon-erro").style.display = "block";
        // Mostra a mensagem do erro
        document.getElementById("error-span").style.display = "block";
    }
}