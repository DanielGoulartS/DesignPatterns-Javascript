import Publisher from "./Publisher";
import Observer from "./Observer";

var header = document.querySelector("header");
var msg1 = document.querySelector("#msg1");
var msg2 = document.querySelector("#msg2");
var footer = document.querySelector("footer");

var title = "Observer";
var explicacao = "&nbsp Observer explica que um objeto publicador que recebe dados pode notificar " +
    "uma série de objetos observadores que estão interessados em seus eventos DESDE QUE todos descendam " +
    "de uma mesma interface. Este padrão é especialmente útil para notificar objetos de eventos " +
    "aos quais eles se interessam e por tanto se inscrevem para tal." +
    "<br> &nbsp Ex: Cada Observador recebe as mesmas informações desde que tenham se inscrito para tal." +
    "O que muda é apenas o que cada um faz com as mesmas informações, como as utiliza ou onde!<br>";

header.innerHTML = title;
msg1.innerHTML = explicacao;

var microsoftPromotions = new Publisher();
var appleNews = new Publisher();

var consumer = new Observer(msg2, "<br>Consuidor diz: Olhe meu novo notebook com ");
var reSeller = new Observer(msg1, "<br>Revendedor diz: Produto Apple ");
var evaluator = new Observer(footer, "<br>Avaliador diz: Desconto 50%: ");

microsoftPromotions.insertObserver(consumer);
microsoftPromotions.insertObserver(evaluator);
appleNews.insertObserver(reSeller);
appleNews.insertObserver(evaluator);

microsoftPromotions.changeValue("Windows XP");
appleNews.changeValue("Disponível");
microsoftPromotions.changeValue("Windows 11");