import IteratorTreeDeep from "./IteratorTreeDeep";
import IteratorList from "./IteratorList";
import Node from "./Node";

var header = document.querySelector("header");
var msg1 = document.querySelector("#msg1");
var msg2 = document.querySelector("#msg2");

var title = "Iterator";
var explicacao = "Iterator sugere que qualquer lista ou estrutura encadeada como árvores e grafos " +
    "podem ter suas lógicas de iteração desacopladas de suas estruturas e passadas para uma classe " +
    "Iteradora a parte. O Iterador por sua vez pode manipular a iteração conforme a sua necessiadade.<br>" +
    "Ex: Considere os seguintes valores: 2-4-6-8-10";

header.innerHTML = title;
msg1.innerHTML = explicacao;

var e2 = new Node(2);
var e4 = new Node(4);
var e6 = new Node(6);
var e8 = new Node(8);
var e10 = new Node(10);
var lista = [e2, e4, e6, e8, e10];

var iteratorTreeDeep = new IteratorTreeDeep(collection ,msg2);

e10.execute(msg2);

//var treeIterator = new IteratorTreeDeep(, msg2);