"use strict"


let perguntas = document.querySelectorAll(".main_pergunta_resposta");

perguntas.forEach((pergunta) => {
    pergunta.addEventListener("click", () => {

        pergunta.classList.toggle("active");
    });
});


