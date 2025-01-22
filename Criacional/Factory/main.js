import FactoryAB from "./FactoryAB.js";

let AddFactory = new FactoryAB();

let title = "Factory";

let explicacao = "Factory trata-se de gerar Objetos a partir de uma classe Fábrica, removendo do " +
"código final essa responsabilidade e a atribuindo a Fábrica em questão. <br>Isso diminuirá " + 
"o código principal e dará a oportunidade de implementar o Abstract Factory, tornando seus códigos " +
" mais facilmente manuteníveis.";

document.querySelector("header").insertAdjacentText("afterbegin", title);
document.querySelector("#msg1").insertAdjacentHTML("beforebegin", explicacao);
document.querySelector("#msg1").insertAdjacentElement("beforeend", AddFactory.generate());