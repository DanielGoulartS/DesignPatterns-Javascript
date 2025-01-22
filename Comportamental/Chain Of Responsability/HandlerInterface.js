export default class HandlerInterface {
    constructor() {
        if (this.constructor === HandlerInterface) {
            throw new TypeError("Interface não instanciável.");
        }

    }

    execute(error) {
        var card = document.createElement("p");
        card.innerHTML = "Not identified Error. Connection not established.";
        return card;
    }

    solveError() {
    }
}