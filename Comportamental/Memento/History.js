import Texto from "./Texto";

export default class History{
    constructor(){
        this.index = 0;
        this.states = [new Texto()];
    }


}