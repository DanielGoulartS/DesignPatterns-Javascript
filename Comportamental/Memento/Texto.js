import History from "./History";

export default class Texto {
    constructor() {
        this.text = "";
        this.length = "";
        this.history = undefined;
    }

    saveState() {
        for (let i = this.history.index + 1; i < this.history.states.length; i++) {
            this.history.states.pop();
        }

        var newTexto = new Texto();
        newTexto.text = this.text;
        newTexto.length = this.length;
        this.history.states[this.history.index + 1] = newTexto;


        this.history.index++;
    }

    restoreState(texto) {
        this.text = texto.text;
        this.length = texto.length;
    }
}