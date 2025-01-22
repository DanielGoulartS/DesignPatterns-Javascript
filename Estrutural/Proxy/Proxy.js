import Interface from "./Interface.js";
export default class Proxy extends Interface {
    constructor(data) {
        super();
        this.data = data;
    }

    display(text, component) {
        if (component.innerHTML !== "") {
            var msg2 = document.querySelector("#msg2");
            var p = document.createElement("p");
            p.innerHTML = "O Proxy impediu a substituição do texto.";
            msg2.insertAdjacentElement("beforeend", p);
            return;
        } else {
            component.innerHTML = text;
        }
    }
}