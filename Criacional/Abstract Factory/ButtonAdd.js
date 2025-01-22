import ButtonInterface from "./ButtonInterface";
export default class ButtonAdd extends ButtonInterface{

    constructor(texto) {
        super(texto);
    }
    execute() {
        let element = document.createElement("p");
        element.innerHTML="Texto Adicionado!";
        document.querySelector("#msg2").insertAdjacentElement("beforeend", element);
    }
}