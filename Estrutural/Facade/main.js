import Facade from "./Facade.js";
import Printer from "./Printer.js";

var header = document.querySelector("header");
var title = "Facade";
var explicacao = "Facade provavelmente o mais simples dos padrões listados sugere a criação de uma " +
"classe para unir todos os métodos de um conjunto de classes (biblioteca) que serão necessários " +
"no código final. Desta forma o código cliente instancia apenas uma classe, " +
"e chama seus métodos, esta classe por sua vez instancia todas as que forem necessárias " +
"e chama todos os métodos necessários, deixando o código caótico por trás desta ''classe fachada''. " +
"<br>Ex: O Título e esta Explicação foram exibidos por meio de uma classe Impressora com esta função, " +
"no entanto os calculos abaixo foram feitos por diversas classes e exibidos pela mesma classe " +
"Impressora, no entanto sem que o código final sequer os chamasse, mas chamando apenas a sua fachada.";

var printer = new Printer();
printer.printMessage(title,"header");
printer.printMessage(explicacao,"#msg1");


var facade = new Facade();

facade.setNum(1);
facade.plus(2);
facade.minus(1);
facade.multiply(3);
facade.divide(2);