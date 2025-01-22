import ProductClothes from "./ProductClothes.js";
import ProductFood from "./ProductFood.js";
import ProductEletronics from "./ProductEletronics.js";
import VisitorRepositor from "./VisitorRepositor.js";
import VisitorCleaner from "./VisitorCleaner.js";
import VisitorCostumer from "./VisitorCostumer.js";

var header = document.querySelector("header");
var msg1 = document.querySelector("#msg1");
var msg2 = document.querySelector("#msg2");

var title = "Visitor";
var explicacao = "&nbsp Visitor existe para que na necessidade de criar um comportamento " +
    "iterador sobre um grupo de objetos iguais ou diferentes, possamos dar estas responsabilidades " +
    "a um único objeto agrupando os comportamentos de iteração em uma só classe à parte, ou ainda " +
    "sem ferir a finalidade do objeto iterado inserindo-o novos métodos." +
    "&nbsp Ex: Cada visitante (Repositor, Cleaner(Zelador) e Costumer(Cliente)) aqui faz " +
    "sua visita a cada um dos produtos no Market(mercado) e itera sobre ele de sua própria maneira, " +
    "com métodos que são compatíveis apenas com este produto mas sem delegar ao produto a função." +
    "&nbsp O produto apenas aceita o visitante.<br>" +
    "O padrão não está diretamente ligado a forma de percorrer os elementos, mas sim à iteração. " +
    "<br><br>";

header.innerHTML = title;
msg1.innerHTML = explicacao;

var market = [new ProductClothes("Camisa", 20),
new ProductClothes("Casaco", 100),
new ProductFood("Banana", 2),
new ProductEletronics("HD", 100)];

var repositor = new VisitorRepositor();
var cleaner = new VisitorCleaner();
var costumer = new VisitorCostumer();

msg2.insertAdjacentHTML("beforeend", "<br>[Repositor]:<br>");
market.forEach((product) => { msg2.insertAdjacentHTML("beforeend", product.acceptIteration(repositor)); });
msg2.insertAdjacentHTML("beforeend", "<br>[Zelador]:<br>");
market.forEach((product) => { msg2.insertAdjacentHTML("beforeend", product.acceptIteration(cleaner)); });
msg2.insertAdjacentHTML("beforeend", "<br>[Cliente]:<br>");
market.forEach((product) => { msg2.insertAdjacentHTML("beforeend", product.acceptIteration(costumer)); });