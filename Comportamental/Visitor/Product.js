export default class Product{
    constructor(){
        if(this.constructor === Product){
            throw new Error("Interface não instanciável.");
        }
    }

    acceptIteration(visitor){}
}