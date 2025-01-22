import StrategyActivision from "./StrategyActivision.js";
import StrategyRiotGames from "./StrategyRiotGames.js";
import StrategyUbisoft from "./StrategyUbisoft.js";
import StrategyBlank from "./StrategyBlank.js";

export default class StateMachine {
    constructor() {
        this.strategy = new StrategyBlank();
    }

    switchStrategy(value) {
        switch (value) {
            case "Activision":
                this.strategy = new StrategyActivision();
                break;
            case "Riot Games":
                this.strategy = new StrategyRiotGames();
                break;
            case "Ubisoft":
                this.strategy = new StrategyUbisoft();
                break;
            default:
                this.strategy = new StrategyBlank();
        }
        this.strategy.prepareStrategy();
        this.execute();
    }

    execute() {
        this.strategy.execute();
    }
}