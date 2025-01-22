import Explanation from "./Explanation.js";


let title = "Prototype";

let explicacao = "Prototype trata-se de criar cópias de objetos por meio de um método 'prototype', que " +
"clona as propriedades e valores do objeto. Utiliza-se este padrão pois campos privados de um objeto " +
"não podem ser vistos de fora da classe, dificultando a perfeita clonagem pelo código externo ou ainda " +
"quando não sabemos a classe do objeto, mas apenas sua interface ou classe pai. " +
"A classe que exibe este texto é produto de Prototype.";

var txt = new Explanation(title, "header");
var textproto = txt.prototypePattern();

var txt1 = new Explanation(explicacao, "#msg1");
var text1proto = txt1.prototypePattern();

textproto.display();
text1proto.display();