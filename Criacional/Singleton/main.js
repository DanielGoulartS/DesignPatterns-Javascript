import Contador from "./Contador.js";


let title = "Singleton";

let explicacao = "Singleton trata-se de criar uma instância única de uma classe para seu algoritmo. Para " +
"isso o construtor nunca será usado, e um método alternativo iniciará o objeto, mas com uma condição: " +
"O objeto só será iniciado se não houver outro já iniciado, caso o contrário este será retornado, " +
"e você terá 2 objetos que operam os mesmos espaços de memória." +
"O objeto iniciado deve ser salvo num campo 'static' que será manipulado através do apontamento da " +
"classe, e não do objeto instânciado.<br><br>" +
"Ex: Estes botões alteram o mesmo valor no mesmo campo da página pois nenhum deles tem a propriedade " +
"do número ou do elemento que o exibe, mas eles fazem solicitações para a Classe, que por sua vez possui." +
"<br><br>";

document.querySelector("header").insertAdjacentHTML("beforeend", title);
document.querySelector("#msg1").insertAdjacentHTML("beforeend", explicacao);

var cont = Contador.getInstance();
document.querySelector("#msg1").insertAdjacentElement("beforeend", cont.buildButton("B1", "red"));
document.querySelector("#msg1").insertAdjacentElement("beforeend", cont.buildButton("B2", "green"));
document.querySelector("#msg1").insertAdjacentElement("beforeend", cont.buildButton("B3", "blue"));