import Image from "./Image.js";
import imageSrc from "./ImageSrc.js";

var header = document.querySelector("header");
var msg1 = document.querySelector("#msg1");
var msg2 = document.querySelector("#msg2");
var components = [header, msg1, msg2];

var title = "Flyweight";
var explicacao = "Flyweight nos atenta ao uso de memória RAM e outros recursos de máquina pelas " +
    "classes das aplicações. Uma vez que os atributos mais pesados de uma classe se repetem em vários " +
    "objetos instânciados, é ideal compartilhá-los salvando-os fora do objeto para usá-los sempre " +
    "que necessário, assim a aplicação não repetirá gastos evitaveis de recurso. <br>" +
    "Ex: O botão a seguir gera uma imagem em um componente aleatório cada vez que é ativado. Ao " +
    "invés de criar múltiplas imagens, tags img (HTML) e buscar um novo componente para exibir a imagem " +
    "a cada vez, a imagem e os componentes que a exibirão já estão disponíveis no código cliente e são " +
    "apenas referênciados.";

var imageSrcArray = [new imageSrc("./Flyweight/Kyle.png")];

var btn = document.createElement("input");
btn.setAttribute("type", "button");
btn.setAttribute("Value", "Adicionar Imagem");
btn.addEventListener("click", () => {
    let x = Math.floor(Math.random() * (2 - 0 + 1)) + 0;;
    new Image(imageSrcArray[0].image, 150, 180, components[x]).draw();
});

header.insertAdjacentHTML("beforeend", title);
msg1.insertAdjacentHTML("beforeend", explicacao);
msg1.insertAdjacentElement("beforeend", btn);
