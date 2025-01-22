import Cart from "./Cart.js";
import Seller from "./Seller.js";
import Stock from "./Stock.js";
import Ware from "./Ware.js";

var header = document.querySelector("header");
var msg1 = document.querySelector("#msg1");
var msg2 = document.querySelector("#msg2");

var title = "Mediator";
var explicacao = "Mediator insita a criação de uma classe que mediará a comunicação entre muitos objetos " +
    "distintos, evitando altos níveis de dependencia e promovendo maior reaproveitamento de código.<br> " +
    "Ex:<br> Nesta simulação de compras o código cliente não interage com o estoque Stock ou com o " +
    "Carrinho de compras Cart, mas delega todas as tarefas a um vendedor Seller que alerta cada " +
    "componente sobre suas tarefas e pede permissão para continuar o algoritmo e alterar seus atributos." +
    "<br><br>";

header.innerHTML = title;
msg1.innerHTML = explicacao;

var stock = new Stock();
var cart = new Cart();
var seller = new Seller(stock, cart);

msg2.insertAdjacentHTML("beforeend", stock.addWare(new Ware("Camisa", 25, 100)));
msg2.insertAdjacentHTML("beforeend", stock.addWare(new Ware("Sapatos", 50, 100)));
msg2.insertAdjacentHTML("beforeend", stock.addWare(new Ware("Calças", 50, 100)));
msg2.insertAdjacentHTML("beforeend", stock.addWare(new Ware("Cinto", 15, 100)));

msg2.insertAdjacentHTML("beforeend", seller.checkWares(seller.stock.wares));

msg2.insertAdjacentHTML("beforeend", seller.giveMe(200, stock.wares[0]));
msg2.insertAdjacentHTML("beforeend", seller.giveMe(1, stock.wares[2]));
msg2.insertAdjacentHTML("beforeend", seller.giveMe(1, stock.wares[3]));

msg2.insertAdjacentHTML("beforeend", seller.checkWares(seller.stock.wares));

msg2.insertAdjacentHTML("beforeend", seller.checkWares(seller.cart.wares));

msg2.insertAdjacentHTML("beforeend", seller.pay());