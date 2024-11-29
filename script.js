document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");
    const main = document.getElementById("main");
    const boxChoice = document.getElementById("box-choice");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        main.style.display = "none";
        boxChoice.style.display = "block";
    });
    selectChoice();

    function selectChoice() {
        const inputs = document.querySelectorAll(".inputs");
        const selectChoice = document.getElementById("select-choice");
        inputs.forEach((button) => {
            button.addEventListener("click", () => {
                console.log("Botão clicado:", button.value);

                // Remove a classe 'selected' de todos os botões
                inputs.forEach((btn) => {
                    btn.classList.remove("select");
                    console.log("Removendo a classe 'select' de", btn.value);
                });

                // Adiciona a classe 'selected' apenas ao botão clicado
                button.classList.add("select");
                console.log(
                    "Adicionando a classe 'select' ao botão:",
                    button.value
                );
                selectChoice.innerText = `You select ${button.value} out of 5`;
            });
        });
    }
});
