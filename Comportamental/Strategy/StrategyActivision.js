import StrategyInterface from "./StrategyInterface.js";

export default class StrategyActivision extends StrategyInterface{
    constructor(){
        super();
        this.message = undefined;
        this.element = undefined;
    }

    prepareStrategy(){
        this.message = "<p class=\"strategyMessage\">Confira jogos Activision como Call of Duty, " +
        "Bush Rescue, e outros <a href=\"https://www.activision.com/\">aqui</a>!</p>";
        this.element = document.querySelector("#msg2");
    }

    execute(){
        var toCleanElement1 = document.querySelectorAll(".strategyMessage");
        toCleanElement1.forEach((element) => {element.remove();});

        this.element.innerHTML = this.message;
    }
}