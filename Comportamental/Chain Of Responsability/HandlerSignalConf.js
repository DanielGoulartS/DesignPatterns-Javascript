import HandlerInterface from "./HandlerInterface.js";

export default class HandlerSignalConf extends HandlerInterface {

    constructor() {
        super();
    }

    execute(error) {
        if (!error.codes.includes(error.code)) {
            return super.execute(error);
        } else {
            if (error.code == 1) {
                return this.solveError();
            } else {
                if (this.next !== undefined) {
                    return this.next.execute(error);
                } else {
                    return super.execute(error);
                }
            }
        }
    }

    solveError() {
        var card = document.createElement("p");
        card.innerHTML = "Error 01 Solved. Connection reestablished.";
        return card;
    }
}