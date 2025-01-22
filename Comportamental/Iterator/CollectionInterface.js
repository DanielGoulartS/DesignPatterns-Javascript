export default class CollectionInterface{
    constructor(){
        if(this.constructor === CollectionInterface){
            throw new Error("Interface não instanciável!");
        }
    }

    createIterator(){}
    
}