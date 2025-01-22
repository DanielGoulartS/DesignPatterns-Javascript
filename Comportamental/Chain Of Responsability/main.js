import Error from "./Error.js";
import HandlerSignalConf from "./HandlerSignalConf.js";
import HandlerDriver from "./HandlerDriver.js";
import HandlerConnection from "./HandlerConnection.js";
import HandlerAdapter from "./HandlerAdapter.js";

var header = document.querySelector("header");
var msg1 = document.querySelector("#msg1");
var msg2 = document.querySelector("#msg2");

var title = "Chain Of Responsability";
var explicacao = "Chain Of Responsability mostra a passagem de uma tarefa entre objetos interligados " +
    "como no Composite por exemplo. Aqui a novidade está em dar a estes objetos, normalmente de classes " +
    "diferentes, condições para executar ou passar a tarefa adiante.<br> " +
    "Ex: Cada Objeto de Erro abaixo, criados após um scan no sistema, deverá ser analisado e cuidado " +
    "pelas devidas classes com as devidas capacidades.<br><br>";

header.innerHTML = title;
msg1.innerHTML = explicacao;

var error1 = new Error(1);
var error2 = new Error(2);
var error3 = new Error(3);
var error4 = new Error(4);
var error5 = new Error(0);

var SCHandler = new HandlerSignalConf();
var DriverHandler = new HandlerDriver();
var AdapterHandler = new HandlerAdapter();
var ConnectionHandler = new HandlerConnection();

SCHandler.next = DriverHandler;
DriverHandler.next = AdapterHandler;
AdapterHandler.next = ConnectionHandler;


msg2.insertAdjacentHTML("beforeend", error1.errorMessage());
msg2.insertAdjacentElement("beforeend", SCHandler.execute(error1));

msg2.insertAdjacentHTML("beforeend", error2.errorMessage());
msg2.insertAdjacentElement("beforeend", SCHandler.execute(error2));

msg2.insertAdjacentHTML("beforeend", error3.errorMessage());
msg2.insertAdjacentElement("beforeend", SCHandler.execute(error3));

msg2.insertAdjacentHTML("beforeend", error4.errorMessage());
msg2.insertAdjacentElement("beforeend", SCHandler.execute(error4));

msg2.insertAdjacentHTML("beforeend", error5.errorMessage());
msg2.insertAdjacentElement("beforeend", SCHandler.execute(error5));