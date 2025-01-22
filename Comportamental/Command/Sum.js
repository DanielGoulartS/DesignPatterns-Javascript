import CommandInterface from "./CommandInterface.js";
export default class Sum extends CommandInterface{
    constructor(number){
        super();
        this.number = number;
    }

    execute(calcNumber){
        return calcNumber + this.number;
    }

    undo(calcNumber){
        return calcNumber - this.number;
    }
}