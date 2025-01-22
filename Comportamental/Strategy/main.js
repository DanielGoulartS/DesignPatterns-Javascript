import StrategySelector from "./StrategySelector";

var header = document.querySelector("header");
var msg1 = document.querySelector("#msg1");
var msg2 = document.querySelector("#msg2");

var title = "Strategy";
var explicacao = "&nbsp Em algoritmos onde o Comportamento do algoritmo " +
    "muda segundo a troca de Estados utiliza-se o padrão Strategy para dissociar o Comportamento da " +
    "DEFINIÇÃO dos Estados. Isso se dá através da criação de classes próprias para cada Comportamento. " +
    "Strategy permite fácil alteração de Comportamento para cada escolha do cliente, e impede que " +
    "sua mudança associada a um estado comprometa outros Estados." +
    "<br> &nbsp Ex: O comportamento do switch da classe StrategySelector permanece igual, " +
    "a diferença no Comportamento ocorre quando cada classe Estado Strategy derivada da " +
    "interface StrategyInterface apesar de possuir os mesmos métodos os implementa de formas " +
    "distintas quando SELECIONADA PELO USUÁRIO.<br>&nbsp -A Diferença para o padrão State se dá na " +
    "LIVRE MUDANÇA DE ESTADO PELO USUÁRIO, enquanto o State faz a mudança em suas próprias regras.-<br>";

header.innerHTML = title;
msg1.innerHTML = explicacao;

var strategySelector = new StrategySelector();

var select = document.createElement("select");
select.setAttribute("placeholder", "Selecione um portal");

select.addEventListener("change", () => { strategySelector.switchStrategy(select.value) });

select.insertAdjacentElement("beforeend", createElement("option", "Selecione:"));
select.insertAdjacentElement("beforeend", createElement("option", "Activision"));
select.insertAdjacentElement("beforeend", createElement("option", "Riot Games"));
select.insertAdjacentElement("beforeend", createElement("option", "Ubisoft"));


msg1.insertAdjacentElement("beforeend", select);

function createElement(elementTag, value) {
    var element = document.createElement(elementTag);
    element.value = value;
    element.innerHTML = value;
    return element;
}