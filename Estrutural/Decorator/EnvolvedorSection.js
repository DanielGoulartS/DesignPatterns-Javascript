import EnvolvedorAbstrato from "./EnvolvedorAbstrato";

export default class EnvolvedorSection extends EnvolvedorAbstrato {
    /**
    * @param {NotificadorInterface} envolvido Interface
    */
    constructor(envolvido) {
        super(envolvido);
    }

    notificar() {
        var target = document.querySelector("section");
        target.insertAdjacentHTML("beforeend", "Section: Leia o console.");
        this.envolvido.notificar();
    }
}