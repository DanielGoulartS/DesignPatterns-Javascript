import StrategyInterface from "./StrategyInterface.js";

export default class StrategyBlank extends StrategyInterface{
    constructor(){
        super();
        this.message = undefined;
        this.element = undefined;
    }

    prepareStrategy(){
        this.message = "";
        this.element = document.querySelector("#msg2");
    }

    execute(){
        var toCleanElement1 = document.querySelectorAll(".strategyMessage");
        toCleanElement1.forEach((element) => {element.remove();});
    }
}