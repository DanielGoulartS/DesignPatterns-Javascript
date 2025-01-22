import EnvolvedorAbstrato from "./EnvolvedorAbstrato";

export default class EnvolvedorMsg2 extends EnvolvedorAbstrato {
    /**
    * @param {NotificadorInterface} envolvido Interface
    */
    constructor(envolvido) {
        super(envolvido);
    }

    notificar() {
        var target = document.querySelector("#msg2");
        target.insertAdjacentHTML("beforeend", "div#Msg2: Leia a section.");
        this.envolvido.notificar();
    }
}