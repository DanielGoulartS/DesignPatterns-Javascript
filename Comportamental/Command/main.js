import Calculator from "./Calculator";
import Sum from "./Sum.js";
import Multiply from "./Multiply.js";

var header = document.querySelector("header");
var msg1 = document.querySelector("#msg1");
var msg2 = document.querySelector("#msg2");

var title = "Command";
var explicacao = "Command sugere envelopar comandos/requisições em um objeto, ao invés de acioná-los" +
    "diretamente por funções, possibilitando sua manipulação como objetos, em arrays e " +
    "outras operações. Desta forma diversas caracteristicas podem ser aplicadas a ela, como Desfazer " +
    "por exemplo.<br><br>" +
    "Ex: Após algumas operações matemáticas realizadas que a classe Calculator (Calculadora) recebeu " +
    "por meio de objetos Command, as mesmas operações puderam ser desfeitas, pois cada operação " +
    "continha dentro de sua classe um método 'undo' (desfazer) configurado previamente.<br>" +
    "Muito comum em editores de documentos, imagens e calculadoras.";

header.innerHTML = title;
msg1.innerHTML = explicacao;

var calculator = new Calculator(0);
displayInfo(calculator.number);
calculator.executeCommand(new Sum(1));
displayInfo(calculator.number);
calculator.executeCommand(new Sum(3));
displayInfo(calculator.number);
calculator.executeCommand(new Multiply(2));
displayInfo(calculator.number);
calculator.back();
displayInfo(calculator.number);
calculator.back();
displayInfo(calculator.number);


function displayInfo(info){
    var card = document.createElement("p");
    card.innerHTML = "Calculator:<br>" + info;
    msg2.insertAdjacentElement("beforeend", card);
}