import NotificadorInterface from "./NotificadorInterface";

export default class EnvolvedorAbstrato extends NotificadorInterface {
    /**
    * @param {NotificadorInterface} envolvido Interface
    */
    constructor(envolvido) {
        super();
        if (this.constructor === EnvolvedorAbstrato) {
            console.error("Classe Abstrata não instanciável.");
            return;
        }
        this.envolvido = envolvido;
    }

    notificar() {
    }
}