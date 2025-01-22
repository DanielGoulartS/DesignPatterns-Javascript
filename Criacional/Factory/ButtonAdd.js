export default class ButtonAdd{

    constructor(texto) {
        this.text = texto;
    }
    execute() {
        let element = document.createElement("p");
        element.innerHTML="Texto Adicionado!";
        document.querySelector("#msg2").insertAdjacentElement("beforeend", element);
    }
}