import StrategyInterface from "./StrategyInterface.js";

export default class StrategyUbisoft extends StrategyInterface {
    constructor() {
        super();
        this.message = undefined;
        this.element = undefined;
    }

    prepareStrategy() {
        this.message = "<h4 class=\"strategyMessage\">Portal Ubisoft: [" +
            "<a href=\"https://www.ubisoft.com/\">https://www.ubisoft.com/</a>]</h4>";
        this.prepareElement();
    }

    execute() {
        var toCleanElement1 = document.querySelectorAll(".strategyMessage");
        toCleanElement1.forEach((element) => { element.remove(); });

        this.element.innerHTML = this.message;
    }

    prepareElement() {
        this.element = document.querySelector("#msg2");
    }
}