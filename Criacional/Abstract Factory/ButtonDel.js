import ButtonInterface from "./ButtonInterface";
export default class ButtonDel extends ButtonInterface {

    constructor(texto) {
        super(texto);
    }
    execute() {
        document.querySelector("#msg2").removeChild(document.querySelector("p"));
    }
}