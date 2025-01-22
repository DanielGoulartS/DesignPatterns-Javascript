
import Notificador from "./Notificador";
import EnvolvedorAbstrato from "./EnvolvedorAbstrato";
import EnvolvedorMsg1 from "./EnvolvedorMsg1";
import EnvolvedorMsg2 from "./EnvolvedorMsg2";
import EnvolvedorSection from "./EnvolvedorSection.js";

var header = document.querySelector("header");
var title = "Decorator";

header.insertAdjacentHTML("beforeend", title);

//var explicacao = new Notificador();
//var wrap1 = new EnvolvedorMsg1(explicacao);
//var wrap2 = new EnvolvedorMsg2(wrap1);
//var wrap2o = new EnvolvedorSection(wrap2);

//OU

var fullwrap = new EnvolvedorSection(new EnvolvedorMsg2(new EnvolvedorMsg1(new Notificador())));

//wrap2o.notificar();

//OU

fullwrap.notificar();