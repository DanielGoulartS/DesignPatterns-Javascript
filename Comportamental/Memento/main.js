import Texto from "./Texto";
import History from "./History";

var header = document.querySelector("header");
var msg1 = document.querySelector("#msg1");
var msg2 = document.querySelector("#msg2");

var texto = new Texto();
texto.history = new History();

var title = "Memento";
var explicacao = "Memento é um padrão baseado na criação da CÓPIA DE UM OBJETO FEITA POR ELE MESMO. " +
    "Esta técnica permite copiar estados de arquivos, softwares e dados integralmente (pois a cópia feita " +
    "dentro da classe acessa irrestritamente seus atributos) e gerenciar alterações feitas.<br> " +
    "Ex: O texto digitado a seguir pode ser alterado e quaisquer alterações feitas podem ser desfeitas " +
    "e refeitas conforme a necessidade, graças ao Memento implantado pela função Texto.saveState() e " +
    "Texto.restoreState(texto) que as retoma.<br>";

header.innerHTML = title;
msg1.innerHTML = explicacao;


var textField = document.createElement("input");
textField.setAttribute("type", "text");

var bt = document.createElement("button");
bt.innerHTML = "Alterar";
bt.addEventListener("click", () => {
    texto.text = textField.value;
    texto.length = textField.value.length;
    texto.saveState();
    msg2.innerHTML = "I" + texto.history.index + "<br>[Tamanho do Texto]: " + texto.length + ".<br> [Texto]: " + texto.text;
});

var btPrevious = document.createElement("button");
btPrevious.innerHTML = "Previous";
btPrevious.addEventListener("click", () => {
    if (texto.history.index > 0) {
        texto.history.index--;
        texto.restoreState(texto.history.states[texto.history.index]);
    } else {
        console.log("Não há estados anteriores para Restaurar.");
    }
    textField.value = texto.text;
    msg2.innerHTML = "I" + texto.history.index + "<br>[Tamanho do Texto]: " + texto.length + ".<br> [Texto]: " + texto.text;
});

var btNext = document.createElement("button");
btNext.innerHTML = "Next";
btNext.addEventListener("click", () => {
    if (texto.history.index < texto.history.states.length - 1) {
        texto.history.index++;
        texto.restoreState(texto.history.states[texto.history.index]);
    } else {
        console.log("Não há estados posteriores para Restaurar.");
    }
    textField.value = texto.text;
    msg2.innerHTML = "I" + texto.history.index + "<br>[Tamanho do Texto]: " + texto.length + ".<br> [Texto]: " + texto.text;
});

msg1.insertAdjacentElement("beforeend", textField);
msg1.insertAdjacentElement("beforeend", bt);
msg1.insertAdjacentElement("beforeend", btPrevious);
msg1.insertAdjacentElement("beforeend", btNext);