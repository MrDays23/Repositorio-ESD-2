const botaoTema = document.querySelector("#tema");

botaoTema.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        botaoTema.textContent = "Modo Claro";
        alert("Tema alterado com sucesso!");
    } else {
        botaoTema.textContent = "Modo Escuro"
        alert("Tema alterado com sucesso!");
    }
});