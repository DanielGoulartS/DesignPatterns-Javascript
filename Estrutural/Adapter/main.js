import Displayer from "./Displayer.js";
import Adapter from "./Adapter.js";


let title = "<h1>Adapter</h1>";

let explicacao = "<p> Adapter trata-se de criar uma interface para interagir com uma classe a qual você " +
"não tem as ferramentas, métodos ou interface necessárias para tal.</p> <br> <br>" +
" Por exemplo o título desta página foi adaptado por outra classe para seu melhor proveito e exibição, já " +
"o texto que você está lendo agora não.</p>";

var header = document.querySelector("header");
var msg2 = document.querySelector("#msg2");

var displayer = new Displayer();
var adapter = new Adapter(displayer);

adapter.display(title, header);
displayer.display(explicacao, msg2);