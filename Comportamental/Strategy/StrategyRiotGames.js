import StrategyInterface from "./StrategyInterface.js";

export default class StrategyRiotGames extends StrategyInterface {
    constructor() {
        super();
        this.message = undefined;
        this.element = undefined;
    }

    prepareStrategy() {
        this.message = "<p class=\"strategyMessage\">Ir para Riot Games: " +
            "<a href=\"https://www.riotgames.com/\"><img src=\"Strategy/Media/RiotLogo.png\" " +
            " style = \"width: 100px; height:100px;\"></a></p>";
        this.element = document.querySelector("#msg2");
    }

    execute() {
        var toCleanElement1 = document.querySelectorAll(".strategyMessage");
        toCleanElement1.forEach((element) => { element.remove(); });

        this.element.innerHTML = this.message;
    }
}