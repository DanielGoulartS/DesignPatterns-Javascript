import HandlerInterface from "./HandlerInterface.js";

export default class HandlerDriver extends HandlerInterface {

    constructor() {
        super();
    }

    execute(error) {
        if (!error.codes.includes(error.code)) {
            return super.execute(error);
        } else {
            if (error.code == 2) {
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
        card.innerHTML = "Error 02 Solved. Connection reestablished.";
        return card;
    }
}