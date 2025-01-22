export default class ObserverInterface{
    constructor(){
        if(this.constructor === ObserverInterface){
            throw new Error("Interface não instanciável.");
        }
    }

    beUpdated(value){}
}