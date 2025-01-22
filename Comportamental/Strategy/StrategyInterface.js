export default class StrategyInterface {
    constructor() {
        if(this.constructor === StrategyInterface){
            throw new Error("Interface não instanciável.");
        }
    }

    prepareStrategy(){}
    
    execute(){}
}