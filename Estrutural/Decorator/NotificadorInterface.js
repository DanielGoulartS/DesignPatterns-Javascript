export default class NotificadorInterface {
    constructor() {
        if (this.constructor === NotificadorInterface) {
            throw new TypeError("Interface não instanciável.");
            return;
        }
    }

    notificar() {
    }


}