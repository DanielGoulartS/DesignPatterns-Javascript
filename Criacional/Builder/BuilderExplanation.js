export default class BuilderExplanation {
    /**
     * @param {Explanator} explanator - The Explanator
    */
    constructor(explanator) {
        this.explanator = explanator;
        this.title = "Builder";
        this.explanation = "Builder trata-se de dar atributos a um objeto que serão " +
            "inicializados NÃO por meio de seu construtor, mas por meio métodos de outras classes " +
            "especializadas em criá-los, que por sua vez seráo chamadas pelo código cliente." +
            "<br>[PS: Estes título e texto foi gerado em uma classe, bem como os elementos onde " + 
            "estão exibidos.]";
    }

    buildTitle() {
        console.log("Build Title");
        this.explanator.title = this.title;
    }

    buildExplanation(pExplanation) {
        console.log("Build Explanation");
        this.explanator.explanation = this.explanation;
    }
}