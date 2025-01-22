import FactoryAB from "./FactoryAB.js";
import FactoryDB from "./FactoryDB.js";

let AddFactory = new FactoryAB();
let DelFactory = new FactoryDB();

let title = "Abstract Factory";

let explanation = "Abstract Factory Trata-se de gerar Fábricas a partir de uma Interface de Fábrica, " +
"assim sempre que precisar de um novo objeto e precisar de uma nova fábrica para cria-lo terá moldes " + 
"para fazer a fábrica e também os objetos ou funções que ele produz." +
"<br>As fábricas tendem a retornar interfaces ou classes abstratas, portanto seus produtos também são " +
"filhos da interface do produto, assim não tem erro na hora de construir a fábrica e seus produtos.";

document.querySelector("header").insertAdjacentText("afterbegin", title);
document.querySelector("#msg1").insertAdjacentHTML("beforebegin", explanation);
document.querySelector("#msg1").insertAdjacentElement("beforeend", AddFactory.generate());
document.querySelector("#msg1").insertAdjacentElement("beforeend", DelFactory.generate());