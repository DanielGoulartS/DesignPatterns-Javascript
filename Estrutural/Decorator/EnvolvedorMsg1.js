import EnvolvedorAbstrato from "./EnvolvedorAbstrato";

export default class EnvolvedorMsg1 extends EnvolvedorAbstrato {
    /**
    * @param {NotificadorInterface} envolvido Interface
    */
    constructor(envolvido) {
        super(envolvido);
    }

    notificar() {
        var target = document.querySelector("#msg1");
        target.insertAdjacentHTML("beforeend", "div#Msg1: Leia a div#Msg2.");
        this.envolvido.notificar();
    }
}