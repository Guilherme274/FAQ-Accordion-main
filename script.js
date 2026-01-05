"use strict"


let perguntas_respostas = document.querySelectorAll(".main_pergunta_resposta");
let imgs = document.querySelectorAll(".main_botaoFAQ")

    perguntas_respostas.forEach((pergunta_resposta) => {

        const pergunta = pergunta_resposta.querySelector(".main_pergunta");

        let apertou = false; 
    
        pergunta.addEventListener("click", () => {

            const img = pergunta.querySelector("img");

            if(apertou == false) {
                apertou = true;
                img.src = "/assets/images/icon-minus.svg";
            }else {
                apertou = false;
                img.src = "/assets/images/icon-plus.svg";
            }   
                
            pergunta_resposta.classList.toggle("active");
        });

    });
    
    
    


