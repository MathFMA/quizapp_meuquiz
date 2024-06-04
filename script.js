import { trocarTema, verificarTema } from "./helpers/tema-helper.js"


const botaoTema = document.querySelector(".tema button")
const body = document.querySelector("body")

botaoTema.addEventListener("click", () => {
   trocarTema(body, botaoTema) 
})

verificarTema(body, botaoTema)

const botoesAssunto = document.querySelectorAll(".assunto button")
botoesAssunto.forEach(botao => {
   botao.addEventListener("click", selecionarAssunto)
})

function selecionarAssunto (evento) {
   const classBotao = evento.target.className
   const assunto = document.querySelector(`.${classBotao} span`).innerText
   const assuntos = evento.target.innerText
   localStorage.setItem("assunto", assunto)
   window.location.href = "./pages/quiz/quiz.html"
}